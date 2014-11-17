'use strict';

var rs = require('random-strings');

// Initialise Game Bundle Key Creation with Prefix + 20 Random Letters.
// Using Example: generate(100, "MERCH")
// Result for each Game Bundle Key: MERCH-XXXXX-XXXXX-XXXXX-XXXXX

// Generate a Game Bundle Key.
exports.create = generate(num, prefix){
	var redeemkey = "";
	for (var i = 0; i < num; i++){
		redeemkey += randString(20, prefix) + "\n";
		}
		return redeemkey;
	}
};

/* Styling Prefix with Redemption Key. */
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

