let path = require('path');
let express = require('express');
let router = express.Router();
let todoList = []; //our todo list array

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'todo', 'index.html'));
});

router.get('/create', function(req, res){
     res.sendFile(path.join(__dirname, 'views', 'todo', 'create.html'));
});

router.get('/delete', function(req, res){
   res.sendFile(path.join(__dirname, 'views', 'todo', 'delete.html'));
});

router.post('/edit', function(req, res){
   res.sendFile(path.join(__dirname, 'views', 'todo', 'edit.html'));
});

module.exports = router;
