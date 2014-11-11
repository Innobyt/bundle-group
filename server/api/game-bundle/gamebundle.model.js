'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GamerepoSchema = new Schema({
    gamelist    : [String],			// ['tome radider', 'resident evil', 'descriction derby']
    redemptions : [Object],			// [{ key, status}, { key, status }]
    merchant    : String,			
    bundlename  : String,
    threshold	: Number,
    count		: Number,
    generated	: Number
});

module.exports = mongoose.model('gambundle', GamerepoSchema);