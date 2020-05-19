let sinirlama= document.querySelector("#mesaj");   
let yazi=document.querySelector("#yazi");   
console.log(sinirlama)
sinirlama.addEventListener("keyup",KarakterSayisi);
function KarakterSayisi()
{
    
    var sonsayi = 100 - document.getElementById("mesaj").value.length;
        if (sonsayi >= 0)
        {
            document.getElementById("sayac").innerHTML = sonsayi;
        }
        else
        {
            document.getElementById("mesaj").value = document.getElementById("mesaj").value.substring(0, 100);
            document.getElementById("sayac").innerHTML = 0;
        }
}