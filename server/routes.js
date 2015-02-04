/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/gameredemptions', require('./api/game-redemption'));
  app.use('/api/gamebundles', require('./api/game-bundle'));
  app.use('/api/users', require('./api/user'));
  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile('index.html', { root: '../client' }); //when deploying using the cmd --> pm2 start server/app.js
 //    res.sendfile('index.html', { root: './client' }); //when deploying using the cmd --> grunt serve
    });
};
