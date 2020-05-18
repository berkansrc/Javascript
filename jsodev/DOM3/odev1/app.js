let mail=document.querySelector("#mail");
let sifre=document.querySelector("#sifre");
let sifre2=document.querySelector("#sifre2");
let buton=document.querySelector("#button");
let check=document.querySelector("#check");


buton.addEventListener("click",tikla)

check.addEventListener("checked",chec);
function chec(){
     sifre.type="text";
     sifre2.type="text";
}
function tikla(){
sessionStorage.setItem("Mail",mail.value);
sessionStorage.setItem("sifre",sifre.value);
sessionStorage.setItem("Tekrar",sifre2.value);
}
function tikla2(){
     sessionStorage.setItem("Ad",ad.value);
     sessionStorage.setItem("Soyad",soyad.value);
     sessionStorage.setItem("Yas",yas.value);
     sessionStorage.setItem("Adres",adres.value);
     sessionStorage.setItem("il",il.value);
}

