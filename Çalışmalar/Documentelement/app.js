
// value=document.all;
// value=document.all.length;
// const collections=Array.from(document.all);
// value=collections.forEach(function(az){
//  console.log(az);
// })
// value=document.location;
// value=document.URL;
// value=document.scripts;
// value=document.links[document.links.length-1].getAttribute("class");
//value=document.getElementById("tasks-title");
// value=document.getElementsByClassName("list-group-item"); 
// console.log(typeof value);
// value=document.getElementsByTagName("div");
// value= document.querySelector("#todo-form");
// value=document.querySelector("#tasks-title");
// value=document.querySelector(".list-group-item");
// value=document.querySelectorAll(".list-group-item");
// var element=value.forEach(function(a){
//     console.log(a);
// })
// console.log(element.textContent="Sil");
let cardbody=document.getElementsByClassName("card-body")[1];
let eskielement=document.getElementById("tasks-title");
let yenielement=document.createElement("h3");
yenielement.className="card-title";
yenielement.id="task-title";
yenielement.textContent="Yeni otto";
cardbody.replaceChild(yenielement,eskielement);


// const element = document.querySelector("#clear-todos");    
// const todolist=document.querySelector(".list-group");
// const todo =document.querySelector(".list-group-item:nth-child(2)")
// const cardrow=document.querySelector(".card.row");
// let value;
// value=todolist.childNodes;
// value=cardrow.children[2].children[1].textContent="Degişti";
// value=cardrow.parentElement;
// value=todo.previousElementSibling;
let value;

// value=document.createElement("a");
// var card=document.getElementsByClassName(".card-body")[1];

// value.id="clear-todos";
// value.className="btn btn-success";
// value.appendChild(document.createTextNode("oasdasd"));
// card.appendChild(value);
// console.log(card);
//value=document.querySelectorAll("li.list-group-item");
// value=document.querySelector("ul.list-group");
// value.removeChild(value.lastElementChild);       