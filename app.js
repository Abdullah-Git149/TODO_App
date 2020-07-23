var list = document.getElementById("list")




// function addTodo(){
//     var todoitem = document.getElementById("todo-items")
//     // li tag create
//     var li = document.createElement("li")
//     var liText = document.createTextNode(todoitem.value)
//     li.appendChild(liText)

//     // create delete button
//     var delBtn = document.createElement("button")
//     var delText = document.createTextNode("Delete")
//     delBtn.setAttribute("class","btn")
//     delBtn.setAttribute("onclick","deleteItem(this)")
//     delBtn.appendChild(delText)
//     li.appendChild(delBtn)

//     // create edit button
//     var editBtn = document.createElement("button")
//     var editTxt = document.createTextNode("Edit")
//     editBtn.setAttribute("class","btn")
//     editBtn.setAttribute("onclick","editItem(this)")
//     editBtn.appendChild(editTxt)
//     li.appendChild(editBtn)

// list.appendChild(li)
// }

// function deleteItem(x){
//     x.parentNode.remove()
// }
// function editItem(y){
//     var val = prompt("Enter edit Value", y.parentNode.firstChild.nodeValue)
//     y.parentNode.firstChild.nodeValue = val
// }
// function deleteAll(){
//     list.innerHTML = ""
// }




var list = document.getElementById("list")

function addTodo() {


    var todoitem = document.getElementById("todo-item")
    // li tag create
    var li = document.createElement('li')
    var liText = document.createTextNode(todoitem.value)
    li.setAttribute("class","liD")
    li.appendChild(liText)
    

    // create delete button
    var delBtn = document.createElement('button')
    var delTxt = document.createTextNode("Delete")
    delBtn.setAttribute("class", "btnn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delTxt)

    // create edit button 
    var editBtn = document.createElement('button')
    var editTxt = document.createTextNode("Edit")
    editBtn.setAttribute("class", "btnn")
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editTxt)

    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    todoitem.value = ''
}
function deleteItem(x) {
    x.parentNode.remove()
}
function deleteAll() {
    list.innerHTML = ""
}

function editItem(y)
{
    console.log(y.parentNode.firstChild.nodeValue)
    var val = prompt("Enter the edited value", y.parentNode.firstChild.nodeValue)
    y.parentNode.firstChild.nodeValue = val
}
