const form=document.querySelector("#todo-form");
const todoinput=document.querySelector("#todo");
const todolist=document.querySelector(".list-group");
const firstcardbody=document.querySelectorAll(".card-body")[0];
const secondcardbody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearbuton=document.querySelector("#clear-todos");
eventListeners();
function eventListeners(){//tüm eventler
   form.addEventListener("submit",addtodo);
   document.addEventListener("DOMContentLoaded",loadalltodosuı);
   secondcardbody.addEventListener("click",deletetodo);
   filter.addEventListener("keyup",filterTodos);
   clearbuton.addEventListener("click",clearAllTodos);
}
function clearAllTodos(e){
   if(confirm("Tümünü temizlemek istediğinizden emin misin")){
       while(todolist.firstElementChild!=null){
            todolist.removeChild(todolist.firstElementChild);
       }
       localStorage.removeItem("todos");
   }
}
function filterTodos(e){
 const filtervalue=e.target.value.toLowerCase();
 const listItems=document.querySelectorAll(".list-group-item");
 listItems.forEach(function(listItem){
  const text=listItem.textContent.toLowerCase();
  if(text.indexOf(filtervalue)=== -1){
   listItem.setAttribute("style","display : none !important");
  }
  else{
     listItem.setAttribute("style","display : block");
  }
 });
}
function deletetodofromstorage(deletetodo){
     let todos=getTodosFromstorage();
    todos.forEach(function(todo,index){
       if(todo=== deletetodo) 
      {
           todos.splice(index,1);
      }
     });
     localStorage.setItem("todos",JSON.stringify(todos));
}
function deletetodo(e){
     if(e.target.className==="fa fa-remove"){
          e.target.parentElement.parentElement.remove();
          deletetodofromstorage(e.target.parentElement.parentElement.textContent);
          showAlert("success","Todo başarıyla silindi...")
     }
}
function addtodo(e){
     const newtodo=todoinput.value.trim();
     if (newtodo===""){
          showAlert("danger","lütfen bir todo girin...");
     } 
     else {
           addtodotouı(newtodo);
           addtodotostroage(newtodo);
           showAlert("success","Başarılı bir şekilde girildi...")
     }
    
     e.preventDefault();
}
function loadalltodosuı(){
  let todos=  getTodosFromstorage();
   todos.forEach(function(todo){
        addtodotouı(todo);
   })
}
function getTodosFromstorage(){
     let todos;
   if(localStorage.getItem("todos") ===null){
        todos=[];
   }
   else{
        todos= JSON.parse(localStorage.getItem("todos"));
   }
   return todos;
}
function addtodotostroage(newtodo ){
   let todos=getTodosFromstorage();
   todos.push(newtodo);
   localStorage.setItem("todos",JSON.stringify(todos));
}
function showAlert(type,message){
     const alet=document.createElement("div");
     alet.className=`alert alert-${type}`
     alet.textContent=message;
     firstcardbody.appendChild(alet);
     setTimeout(function(){
         alet.remove();
     },3000);
}
function addtodotouı(newtodo){
   
     const listitem=document.createElement("li");
     const link=document.createElement("a");
     link.href="#";
     link.className="delete-item";
     link.innerHTML="<i class = 'fa fa-remove'></i>";
     listitem.className="list-group-item d-flex justify-content-between";
     listitem.appendChild(document.createTextNode(newtodo));
     listitem.appendChild(link);
     todolist.appendChild(listitem);
     todoinput.value="";
     
} 