var express = require('express');
var router = express.Router();
var rs = require('random-strings');

/* GET home page. */
router.get('/', function(req, res) {

function randString(x, prefix){
var m = prefix + "-";
var c = rs.human(20);
var sym = c.replace(/(.{5})/g,"$1-");
var trim = sym.slice(0,-1);
var merge = m + trim;
return merge;
for(var i = 0, redemption = [], string = ''; i < n; i++){
redemption.push(merge);
}
return redemption;
}

function generate(num, prefix){
var redeemkey = "";
for (var i = 0; i < num; i++)
{
redeemkey += randString(20, prefix) + "\n";
}
return redeemkey;
}

var redeemcode = generate(100, "INNOB");

  res.render('index', { title: 'Express', result: redeemcode });
});

module.exports = router;
