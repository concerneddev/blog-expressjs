const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

// express-handlebars config
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// middleware
app.use(express.static(path.join(__dirname, "static")));

// referencing the routes
app.use('/', require(path.join(__dirname, 'routes/blog.js')));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
