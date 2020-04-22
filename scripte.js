var item = document.getElementsByid("todoInput").Value
var text = document.createTextNode(item);
var newItem = document.createElement("li");

function todoList(){
   
    newItem.appendChild(text);
    document.getElementById("todoList").appendChild(newItem);
}

