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
}
function addtodo(e){

     const newtodo=todoinput.value.trim();
     if (newtodo=""){
          showAlert("danger","lütfen bir todo girin...");
     } 
     else {
           addtodotouı(newtodo);
     }
    
     e.preventDefault();
}
function showAlert(type,message){
     const alet=document.createElement("div");
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