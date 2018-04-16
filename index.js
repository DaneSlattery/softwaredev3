let path = require('path');
let express = require('express');
let app = express();
let mainRouter = require('./mainRoutes.js');
let todoRouter = require('./todoRoutes.js');

app.use('/', mainRouter);
app.use('/todo', todoRouter);

app.listen(3000);
console.log("Express server running on port 3000");
