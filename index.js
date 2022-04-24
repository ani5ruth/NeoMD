const express = require('express');
const path = require('path');
const app = express();

// middleware and viewengine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// home route
app.get('/', (req, res) => res.render('index'));

// movie router
const movieRouter = require('./controller/movie');
app.use('/movies', movieRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on port ${port}`));