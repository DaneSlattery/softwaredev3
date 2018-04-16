let path = require('path');
let express = require('express');
let router = express.Router();
let todoList = []; //our todo list array

//RESTful api
router.get('/api/list', function (req, res) {
  res.json(todoList); //Respond with JSON
});

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

router.get('/api/get/:id', function (req, res) {
   res.json(todoList[req.params.id]); //Notice the wildcard in the URL?
                //Try browsing to /api/get/0 once you've added some entries
});

router.post('/api/create', function(req, res){
  console.log("creating a todo entry");
});

router.post('/api/delete', function(req, res){
  console.log("deleting a todo entry");
});

router.post('/api/edit', function(req, res){
  console.log("editing a todo entry");
});

module.exports = router;
