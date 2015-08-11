// server.js -- initialize node.js server
// ----------------------------------------------
var app = require('./config/server-config.js');

// user1.save(function(err, userObj){
//   if(err){
//     console.log(err);
//   } else {
//     console.log('saved successfully: ', userObj);
//   }
// });


var port = 3000;

app.listen(port);
console.log('Beer-tab server listening on port ' + port);

// module.exports = db;