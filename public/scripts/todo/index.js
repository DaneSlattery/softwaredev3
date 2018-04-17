let request = new XMLHttpRequest();
request.open('GET', '/todo/api/list', true);

let requestErrorFunc = function()
{
  console.log( "ERROR: failed to load todoList" );
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
      let liText = document.createTextNode(todoItem); // Append the class to the list element
      li.className += 'todo-item';
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
