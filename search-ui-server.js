var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/static'))

app.get('/:filename', function(req, res) {
    var fileName = req.params.filename;

    var options = {
        root: __dirname + '/static/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
        else {
            console.log('Sent:', fileName);
        }
    });
})


app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})