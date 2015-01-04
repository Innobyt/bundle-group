'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GamebundleSchema = new Schema({
	gamelist:			Array, // example: [{ 'gametitle' : 'tomb radider'}, {'gametitle' : 'resident evil'}]
	redemptionskey:		Array, // example: [{ key, status}, { key, status }]
	merchant:			String,
	merchant_prefix:	String,
	bundlename:			String,
	threshold:			Number,
	count:				Number
});
module.exports = mongoose.model('gamebundle', GamebundleSchema);