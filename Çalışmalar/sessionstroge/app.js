let ekle=document.getElementById("add");
let sil=document.querySelector("#delete");
let temizle=document.querySelector("#clear");

let deger=document.getElementById("addvalue");
let anahtar=document.getElementById("addkey")
let caz=document.getElementById("deletekey")

ekle.addEventListener("click",ekleme)
sil.addEventListener("click",silme)
temizle.addEventListener("click",temizleme)
function ekleme(e){
    sessionStorage.setItem(anahtar.value,deger.value);
}
function silme(e){
    sessionStorage.removeItem(caz.value)
}
function temizleme(e){
    sessionStorage.clear();
}