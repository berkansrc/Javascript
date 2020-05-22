let buton=document.querySelector("#button");
let buton2=document.querySelector("#button2");
let ekran1=document.querySelector("#ekran1");
let ekran2=document.querySelector("#ekran2");
let bir=document.querySelector("#bir");
let iki=document.querySelector("#iki");
buton.addEventListener("click",ileri);
buton2.addEventListener("click",geri);
function ileri(){
    bir.className="bg-white";
    iki.className="bg-danger";
buton.style.display="none"
buton2.style.display="block"
ekran1.style.display="none";
ekran2.style.display="block";
}
function geri(){
    iki.className="bg-white";
    bir.className="bg-danger";
    buton2.style.display="none"
    buton.style.display="block"
    ekran1.style.display="block";
    ekran2.style.display="none";
}
    


