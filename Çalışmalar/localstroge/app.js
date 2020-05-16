let form=document.querySelector("#todo-form");
let input=document.querySelector("#todo");

form.addEventListener("submit",ekle)

function ekle(e){
    let val=input.nodeValue;
    let todos;
    if (localStorage.getItem("todos")===null) {
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    } 
    todos.push(val);  
    localStorage.setItem("todos",JSON.stringify(val));
    e.preventDefault();

}