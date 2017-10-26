var express = require('express');
var http = require('http');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/:id', function(req, res) {
    console.log(req.params);
    res.write('hello!'+req.params.id, function(err) {
        if (err) {}
        else {
            res.end();
        }
    })
});

app.post('/echo', function(req, res) {
    var q = req.query;
    console.log(q);
    res.write('received post: msg = '+q.msg, function(err) {
        if (err) {}
        else {
            res.end();
        }
    })
});

http.createServer(app).listen(app.get('port'), function() {
    //
});