const importFunc = require('./js/func2')

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');

// Podpięcie css
const path = require('path')
app.use('/assets', express.static(path.join(__dirname, "./assets")));

app.use('/js', express.static(path.join(__dirname, "./js")));

app.get('/', function (req, res) {

    const sample = () => {
        return "Nauka"
    }

    res.render('index', {
        pageTitle: "Lekcja nodeJS 25.04",
        subTitle: importFunc.someTitle,
        newVar: sample()
    })
})

app.get('/krzysiek', function (req, res) {
    res.render('krzysiek')
})
app.listen(port, (err) => {
    console.log('Serwer działa na porcie', port)

    if (err) {
        return console.log('Błąd serwera', err)
    }
})