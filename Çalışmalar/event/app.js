const filter=document.getElementById("filter");
filter.addEventListener("focus",function(a){
  
        console.log("helalkee");
})

const todo=document.getElementById("todo");
const t=document.getElementById("text");
document.addEventListener("keyup",function(){
  t.textContent=todo.value;
});