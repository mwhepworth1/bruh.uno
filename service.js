const express = require('express'),
      utils = require('./utils/stringGen.js'),
      app = express(),
      bodyParser = require('body-parser');

//Database Functions
const grabURL = require('./utils/data/grabData.js'),
      insertData = require('./utils/data/insertData.js')

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser({extended: false}));

app.get('/', (req, res) => {
    // BEGIN CODE GENERATION
    let shortCode;
    if (req.query.code) shortCode = decodeURIComponent(req.query.code);

    if (decodeURIComponent(req.query.success) == 'true' && req.query.url) {
        let str = utils.generate(6);
        str.then(r => {
            insertData.insertData(decodeURIComponent(req.query.url), r);
            console.log(r); 
            res.status(303).redirect(`/?code=${encodeURIComponent(r)}`);
        })
    } else if (req.query.code) {
        res.render('pages/success', {
            code: shortCode,
        });
    } else {
        res.render('pages/index');
    }
})

app.post('/api/shortenURL', (req, res) => {
    res.status(201).redirect(`/?success=true&url=${encodeURIComponent(req.body.url)}`);
})

app.get('/go/:code', (req,res) => {
    const code = req.params.code;
    let url = grabURL.grabData(code);
    url.then(r => {
        if (r.url) {
            res.render('pages/go', {
                url: r.url,
                code: code,
            });
        } else {
            res.render('error/404');
        }
    })
})

app.listen(7979, () => {
    console.log('Link Gen Service live on port 7979.');
}); 