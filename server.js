const socks = require('socksv5');

const srv = socks.createServer(function(info, accept, deny) {
  accept();
});
srv.listen(1080, 'localhost', function() {
  console.log('SOCKS server listening on port 1080');
});

// srv.useAuth(socks.auth.None());

srv.useAuth(socks.auth.UserPassword(function(user, password, cb) {
	console.log('sockauth =',user === 'nodejs' && password === '123123');
  cb(user === 'nodejs' && password === '123123');
}));
