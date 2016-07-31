'use strict';

const PORT = process.env.PORT || 8000;

var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    // console.log('req: ', req);
    console.log('req.url: ', req.url);
    var params = req.url.split('/');
    console.log('params: ', params);
    params.shift(); // throw away the empty first object
    var resource = params.shift().toLowerCase();

    console.log('resource: ', resource);


    switch (resource) {
        case 'gravatar':
            require('./gravatar')(params, res);
            break;
        case 'sentence':
            require('./sentence')(params, res);
            break;
        case 'math':
            require('./math')(params, res);
            break;
        case 'age':
            require('./age')(params, res);
            break;
        case '':
            var data = fs.readFileSync('./public/index.html');
            res.end(data.toString());
            break;
        default:
            fs.readFile(`./public/${resource}`, (err, data) => {
                if (err) {
                    res.statusCode = 404;
                    console.error(err);
                    res.write(`<h1 style="color: red;">404 Not Found the document of ~/${resource}!</h1>`);
                    res.end('\n');
                } else { // file found.
                    console.log('check'); // default will be run for every case.
                    res.end(data.toString());
                }
            });
    }
}).listen(PORT, function(err) {
    if (err) return console.log('err:', err);
    console.log(`Node server listening on portttt ${PORT}!!`);
});


//  localhost: 3000/str/upperCase/banana
