/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var GamebundleGen = require('./gamebundle-gen.model');

exports.register = function(socket) {
  GamebundleGen.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  GamebundleGen.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('gamebundle-gen:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('gamebundle-gen:remove', doc);
}