// server.js -- initialize node.js server
// ----------------------------------------------
var app = require('./server-config.js');

var port = 3000;

app.listen(port);

console.log('Beer-tab server listening on port ' + port);