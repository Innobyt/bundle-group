'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GamerepoSchema = new Schema({
    gamelist    : Array,			// ['tome radider', 'resident evil', 'descriction derby']
    redemptions : Array,			// [{ key, status}, { key, status }]
    merchant    : String,			
    bundlename  : String,
    threshold	: Number,
    count		: Number,
    generated	: Number
});

module.exports = mongoose.model('gambundle', GamerepoSchema);