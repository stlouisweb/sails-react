/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


 module.exports = {
 	index: function (req, res) {
    var pathArr = __dirname.split('/');
    pathArr.pop();
    pathArr.pop();
    var dirPath = pathArr.join('/');
    return res.sendfile(dirPath + '/frontend/build/index.html');
 		}
 	};
