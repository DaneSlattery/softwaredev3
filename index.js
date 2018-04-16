let path = require('path');
let express = require('express');
let app = express();
let xml = require('xmlhttprequest')

//loading body-parser
let bodyParser = require('body-parser');

let mainRouter = require('./mainRoutes.js');
let todoRouter = require('./todoRoutes.js');

//tell express to use bodyParser for JSON and URL encoded form bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', mainRouter);
app.use('/todo', todoRouter);

app.use('/cdn', express.static('public')); /* this will mount your public directory to '/cdn'. i.e. your scripts folder will be at /cdn/scripts */

let request = new xml.XMLHttpRequest();
request.open('GET', '/todo/api/list', true);

let requestErrorFunc = function() {
  window.alert( "ERROR: failed to load todoList" );
};

request.onload = function (data)
{
  if (request.status >= 200 && request.status < 400)
  {
    let data = JSON.parse(request.responseText);
    let todoList = document.getElementById('todoList');
    // Iterate through all todo items
    data.forEach(function(todoItem)
    {
      // Create a new list entry
      let li = document.createElement("LI");
      let liText = document.createTextNode(todoItem); // Append the class to the list element li.className += 'todo-item';
        // Append list text to list item and list item to list
        li.appendChild(liText);
        todoList.appendChild(li);
    });
  } else {
    requestErrorFunc();
  }
};

request.onerror = requestErrorFunc;
request.send();


app.listen(process.env.PORT || 3000);
console.log("Express server running on port 3000");
