'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GamebundleSchema = new Schema({
    gamelist    : Array,			// ['tome radider', 'resident evil', 'descriction derby']
    redemptions : Array,			// [{ key, status}, { key, status }]
    merchant    : String,
    merchant_prefix    : String,	// new merchant prefix
    bundlename  : String,
    threshold	: Number,
    count		: Number
});

module.exports = mongoose.model('gamebundle', GamebundleSchema);