var connect = require('connect');
var http = require('http');

var app = connect()
    .use(connect.static('app'))
    .use('/js/lib/', connect.static('node_modules/requirejs/'))
    .use('/js/module/', connect.static('node_modules')
);

http.createServer(app).listen(3000, function() {
  console.log('Running on http://localhost:3000');
});