let mail=document.querySelector("#mail");
let sifre=document.querySelector("#sifre");
let sifre2=document.querySelector("#sifre2");

let buton=document.querySelector("#button");
let buton2=document.querySelector("#button2");
let bir=document.querySelector("#bir");
let iki=document.querySelector("#iki");

buton.addEventListener("click",ileri);
bir.className="bg-danger text-center mr-5"
buton2.addEventListener("click",geri);
buton2.style.display="none";

function form2(){
buton2.style.display="block";
buton.style.display="none";
mail.placeholder="Ad";
sifre.placeholder="Soyad";
sifre2.placeholder="Adres";
iki.className="bg-danger text-center ml-5"
bir.className="bg-white"
}
function form1(){
     bir.className="bg-danger mr-5"
    iki.className="bg-white" 
buton2.style.display="none";
mail.placeholder="E mail";
sifre.placeholder="Şifre";
sifre2.placeholder="Şifre tekrar";
buton.style.display="block";

}

function ileri(){
form2();

}

function geri(){
form1();
}