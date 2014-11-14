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
        if(found) return handleError(res,{message: ' duplicate entry found'})
        
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


exports.index = function(req, res) { 

 };


exports.show = function(req, res) {

 };


exports.update = function(req, res) {

 };

exports.destroy = function(req,res){

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