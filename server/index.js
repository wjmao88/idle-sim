const Hapi = require('hapi');

const server = new Hapi.Server();

const Path = require('path');

const appPath = Path.join(__dirname, '../dist');

server.connection({
    host: 'localhost',
    port: 11111
});

server.start((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server running at: ${server.info.uri}`);
    }
});

server.register(require('inert'), (err) => {

    if (err) { throw err; }

    server.route({
        method: 'GET',
        path: '/',
        handler: function(req, res){
            res.file(appPath + '/index.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/assets/{file*}',
        handler: {
            directory: {
                path: appPath
            }
        }
    });
});


