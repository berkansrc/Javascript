let mesaj=document.getElementById("mesaj");
let yor=document.getElementById("yorum")


function Kontrol(){
let yorum=document.createElement("p");

yorum.appendChild(document.createTextNode(mesaj.value));
console.log(yorum);
let dizi=[yorum.textContent.split(" ")];
let regex=/^["\sansür"]$/
for (let index = 0; index < dizi.length; index++){
    if(regex.test(dizi[index])==false){
        yor.appendChild(document.createTextNode(dizi[index]));
    }
    else if(regex.test(dizi[index])==true){
        alert("***");
    }
}


}