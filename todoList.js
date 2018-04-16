//Private
var list = [];

//Public
module.exports =
{
    add: function(todo)
    {
        list.push(todo)
    },
    edit: function(todo, index)
    {
        list[index] = todo;
    },
    get: function(index)
    {
        return list[index];
    },
    delete: function(index)
    {
        list.splice(index, 1); //remove one element starting from index
    },
    listLength: function()
    {
        return list.length
    },
    test: function()
    {
        return true;
    }
}
