let ad=document.querySelector("#ad");
let soyad=document.querySelector("#soyad");
let yas=document.querySelector("#yas");
let adres=document.querySelector("#adres");
let il=document.querySelector("#il");
let buton2=document.querySelector("#buton");
buton2.addEventListener("click",tikla2)
function tikla2(){
    sessionStorage.setItem("Ad",ad.value);
    sessionStorage.setItem("Soyad",soyad.value);
    sessionStorage.setItem("Yas",yas.value);
    sessionStorage.setItem("Adres",adres.value);
    sessionStorage.setItem("il",il.value);
}