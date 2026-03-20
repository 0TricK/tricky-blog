const http = require('http');
const express = require('express');

//defines where server is hosted
const app = express();
//listen for requests on port 3000
app.listen(3000);
//register view engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('public'));

app.get('/', (req, res) => {

    res.render('index', { title: 'Home' })

});

app.get('/about', (req, res) => {

    res.render('about', { title: 'About' })
});

app.get('/blogs', (req, res) => {

    res.render('blogs', { title: 'All Blogs' })
});

app.get('/blogs/create', (req, res) => {

    res.render('create', { title: 'Create a new Blog' })
});

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
});
