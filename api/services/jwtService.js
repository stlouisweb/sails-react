/**
 * jwtService
 *
 * @description :: JSON Webtoken Service for sails
 * @help        :: call jwtService.issue with a payload to generate a new token. call jwtService.verify with a token and callback, decoded token is returned on callback.
 */

 var
   jwt = require('jsonwebtoken'),
   tokenSecret = "secretissecet";

 // Generates a token from supplied payload
 module.exports.issue = function(payload) {
   return jwt.sign(
     payload,
     tokenSecret, // Token Secret that we sign it with
     {
       expiresIn : 180*60 // Token Expire time
     }
   );
 };

 // Verifies token on a request
 module.exports.verify = function(token, callback) {
   return jwt.verify(
     token, // The token to be verified
     tokenSecret, // Same token we used to sign
     {}, // No Option, for more see https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
     callback //Pass errors or decoded token to callback
   );
 };
