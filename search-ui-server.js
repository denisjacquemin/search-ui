var express = require('express');
    device  = require('express-device');
var app = express();

var router = express.Router();


app.set('port', (process.env.PORT || 5000))
app.set('view engine', 'ejs');

app.use(device.capture());
device.enableDeviceHelpers(app)

app.use(express.static(__dirname + '/static'))

router.get('/', function(req, res) {
    res.render('pages/index');
});

router.get('/:filename', function(req, res) {
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

app.use('/', router);

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})