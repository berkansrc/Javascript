let div= document.getElementById("a");
// setTimeout(function(){//Belli bir saniye sonra olacak kodlar
// div.textContent="Selamm"
// },5000);
let dur=document.getElementById("buton");
let sayac=0;
let set=setInterval(() => {// Belirlenen saniye de dönen bir yapı
    sayac++;
    div.textContent=sayac;
},1000);
dur.addEventListener("click",()=>{
    clearInterval(set);
});
