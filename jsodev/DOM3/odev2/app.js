let radio1=document.getElementById("exampleRadios1");
let radio2=document.getElementById("exampleRadios2");
let progess=document.getElementById("t");
let progess2=document.getElementById("t2");
let kay=document.getElementById("a");
let kaya=document.getElementById("az");
let kayaa=document.getElementById("g");
let kayaaa=document.getElementById("ga");

function tikla(){
    if(radio1.checked==true ||radio2.checked==false){
        kayaa.style.display="block";
        kayaaa.style.display="block";
        kay.style.display="none";
        kaya.style.display="block";
        progess.style.display="block";
        progess2.style.display="block";
        progess.style.width="80%";  
         progess2.style.width="20%";
    
    }
    else{
        kay.style.display="none";
        kaya.style.display="block";
        kayaa.style.display="block";
        kayaaa.style.display="block";
        progess.style.display="block";
        progess2.style.display="block";
        progess.style.width="20%";  
         progess2.style.width="80%";
    }
}
function tikla2(){
    kayaa.style.display="none";
    kayaaa.style.display="none";
    kay.style.display="block";
    kaya.style.display="none";
    progess.style.display="none";
    progess2.style.display="none";
}