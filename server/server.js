// server.js -- initialize node.js server
// ----------------------------------------------
var app = require('./config/server-config.js');

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Beer-tab server listening on port ' + port);
