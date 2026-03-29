require('dotenv').config();
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

//defines where server is hosted
const app = express();
const dbURI = process.env.DB_URI;


mongoose.connect(dbURI)
    .then((result) => app.listen(3000, () => console.log('Server is running on port 3000')))
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    res.render('index', { title: 'Home' })

});

app.get('/about', (req, res) => {

    res.render('about', { title: 'About' })
});

//blog routes
app.use('/blogs',blogRoutes);

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
});
