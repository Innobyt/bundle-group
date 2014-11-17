var express = require('express');
var router = express.Router();

/* Uses Random Strings JS. */
var rs = require('random-strings');

/* GET home page. */
router.get('/', function(req, res) {

/* Styling Prefix with Redemption Codes. */
function randString(x, prefix){
var m = prefix + "-";
var c = rs.human(20);
var sym = c.replace(/(.{5})/g,"$1-");
var trim = sym.slice(0,-1);
var merge = m + trim;
return merge;
/* Push to Redemption Array. */
for(var i = 0, redemption = [], string = ''; i < n; i++){
redemption.push(merge);
}
return redemption;
}

/* Generate Redemption Codes. */
function generate(num, prefix){
var redeemkey = "";
for (var i = 0; i < num; i++)
{
redeemkey += randString(20, prefix) + "\n";
}
return redeemkey;
}

/* Initialising with "100" Redemption Codes with "INNOB" Prefix. */
var redeemcode = generate(100, "INNOB");

  res.render('index', { title: 'Express', result: redeemcode });
});

module.exports = router;
