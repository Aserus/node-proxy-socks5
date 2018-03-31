var express = require('express');
var app = express();


var socks = require('socksv5');


console.log(process.env);


var mainPort = process.env.PORT || 3000;
//var socks5Port = process.env.NODE_APP_SOCKSPORT || 1080;





var srv = socks.createServer(function(info, accept, deny) {
  accept();
});
srv.listen(mainPort, '0.0.0.0', function() {
  console.log('SOCKS server listening on port',mainPort);
});

//process.env.NODE_APP_USERNAME = 'nodejs';
//process.env.NODE_APP_PASSWORD = '123123';
// srv.useAuth(socks.auth.None());

srv.useAuth(socks.auth.UserPassword(function(user, password, cb) {
  cb(user === process.env.NODE_APP_USERNAME && password === process.env.NODE_APP_PASSWORD);
}));


/*
app.use(function(req, res) {
	res.end('ok');
});


app.listen(appPort, function() {
    console.log('Express started on port',appPort);

});
*/
