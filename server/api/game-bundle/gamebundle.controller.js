'use strict';

var gamebundle = require('./gamebundle.model');
var http = require('http');

var gamerepo = {

	post : {
		// accepts an array of gametitles, returns true | false | error callback
		does_gametitles_exist : function(gamelist, callback){

			var data = JSON.stringify(gamelist);

			var headers = { 
				'Content-Type': 'application/json', 
				'Content-Length': data.length 
			};

			var options = {
				headers: headers,
				method: 'POST',
				port: 9000,
				host: 'localhost',
				path: '/api/game-repo/has'
			};

			var httpreq = http.request(options, function (response) {
				response.setEncoding('utf8');

				var responseString = '';

				response.on('data', function (chunk) {
					responseString = chunk;
				});

				response.on('end', function() {
					callback( 
						JSON.parse(responseString).err, 
						JSON.parse(responseString).result
					);
				})
			});

			httpreq.write(data);
			httpreq.end();	
		}
	}
};

// create gamebundle document, handle error || success response
exports.create = function(req, res) {

    gamebundle.findOne({ bundlename: req.body.bundlename }, function(err, found){
        
        // handle error
        if(err) return handleError(res,err);

        // handle found
        if(found) return handleError(res,{message: ' duplicate entry found'});
        
        // create gamerepoth document, handle error || create gamerepo document
        gamerepo.post.does_gametitles_exist(req.body, function(err, result){

        	// handle error
        	if(err) return handleError(res,{message: ' error'});

        	// handle not found
        	if (!result) return handleError(res,{message: ' could not find gametitles'})

        	// handle found
        	var gamebundle_created = parse_form_gamebundle(req.body);
        	gamebundle.create(gamebundle_created, function(err, doc){
        		
				return err ? handleError(res,err) : res.json(201, { // handle err, else handle success
					gamebundle : gamebundle_created // return successful data from gamebundle
				});
			});
        });
    });
 };

// index get a list of game-bundle documents
exports.index = function(req, res) { 

	// find all gamebundle documents
    gamebundle.find({}, function(err, doc){

        // return query
        return err 
        // handle error
        ? handleError(res, err)
        // handle success
        : res.json(doc);

    });
 };

// show get an individual game-bundle document
exports.show = function(req, res) {

	// find game bundle by id
	gamebundle.findById(req.params.id, function (err, doc) {
		
		// handle error
		if(err) return handleError(res, err);
		
		// return query
		return !doc
		// handle gamebundle not found
		? res.send(404)
		// handle gamebundle found
		: res.json(doc);

	});
 };

// update add gamebundle redemotion key
exports.update = function(req, res) {

    var update_entries = parse_form_update_gamebundle(req.body);

    // create a query
    var query_findOne = {
    	
    	_id: req.params.id,

    	redemptions : { 
    		$in : update_entries.redemptions
    	}
    };

    // create a query
    var query_update = {

    	_id: req.params.id

    };

    // create an update
    var update = { 

    	$pushAll : { 

    		redemptions : update_entries.redemptions 
    	} 

	};

    gamebundle.findOne(query_findOne, function(err , found){

        // handle error
        if(err) return handleError(res,err);

        // handle found
        if(found) return handleError(res,{message: ' duplicate entry found'})
        
        // create gamerepoth document, handle error || create gamerepo document
        gamebundle.update( query_update, update, function(err,doc){

			// handle error
			if(err) return handleError(res, err);

			// return query
			return !doc
			// handle gamebundle not found
			? res.send(404)
			// handle gamebundle found
			: res.json(update_entries.redemptions);

	    });

    });

 };

// delete a gamebundle document
exports.destroy = function(req,res){

	// find game bundle by id
	gamebundle.findById(req.params.id, function (err, doc) {

		// handle error
		if(err) return handleError(res, err);

		// handle gambundle not found
		if(!doc) return res.send(404); 

		// remove gamebundle
		doc.remove(function(err) { 

			// handl return
		    return err 
		    // handle remove document error
		    ? handleError(res, err) 
		    // handle remove document success
		    : res.send(204);

		});
	});
 };

// redemption gamebundle redemptionkey, handle error || success response and dispatch email, to admin
exports.redemption = function(req, res) {
	// code edit. 
 };

function handleError(res, err) {
  return res.send(500, err);
 };

// returns an array of entries
function parse_form_gamebundle(args){

	var save = args;
	var redemptions = [];
	for(var i = 0; i < args.count; i++) {
		redemptions.push( { status : true, key : '' } );
	}

	// override string of gamelist, and convert to array of gamelist
	save.gamelist = parse_gametitles(save.gamelist);

	// create redemptions property
	save.redemptions = redemptions;

	// create generated property
	save.generated = 1;

	return save;
 };

// returns an array of entries
function parse_form_update_gamebundle(args){

	// parse redemption keys as an array
    var redemptionkeys = parse_multiformat_redemptionkeys(args.redemptionkeys);

    // create a save
	var save = args;

	// remove unformatted data from save
	delete save.redemptionkeys;
	
	// create a redemptions property of type array on save
	save.redemptions = [];

	for(var i = 0; i < redemptionkeys.length; i++) {
		save.redemptions.push( { status : true, key : redemptionkeys[i] } );
	}

	return save;
 };

// accepts, string or csv, returns an array of redemptionkeys
function parse_multiformat_redemptionkeys(data){
    
    // support unix/window compliance
    var gamekeys_array = data.replace( /\r\n/g, "," );
    gamekeys_array = gamekeys_array.replace( /\n/g, "," );
    gamekeys_array = gamekeys_array.replace( /\s/g, "," );
    gamekeys_array = gamekeys_array.split( "," );

    // check if last array is ""
    while(gamekeys_array[gamekeys_array.length - 1] == ""){
        gamekeys_array.pop();
    }

    return gamekeys_array;
 };

// accepts, string, returns an array of gametitles
function parse_gametitles(data){
    
    // support unix/window compliance
    var gametitle_array = data.replace( /\r\n/g, "," );
    gametitle_array = gametitle_array.replace( /\n/g, "," );
    gametitle_array = gametitle_array.replace( /,\s/g, "," );
    gametitle_array = gametitle_array.replace( /\s,/g, "," );
    gametitle_array = gametitle_array.split( "," );

    // check if last array is ""
    while(gametitle_array[gametitle_array.length - 1] == ""){
        gametitle_array.pop();
    }

    return gametitle_array;
 };
