var isim = document.querySelector("#exampleInputad1");
var soyisim= document.querySelector("#exampleInputsoyad1");
var mail = document.querySelector("#exampleInputEmail1");
var secim = document.querySelector("#form1");

function gir()
{
   var etiket;
   let a;
    if (isim.value == "")
    {
        a = secim.children[0];
        etiket=document.createElement("span");
        etiket.id = "hata";
        etiket.className="text-danger";
        etiket.appendChild(document.createTextNode("boş bırakılamaz"));
        a.appendChild(etiket);
     
    }
   
    if (soyisim.value == "")
    {
       a = secim.children[1];
       etiket=document.createElement("span");
       etiket.id = "hata";
       etiket.className="text-danger";
       etiket.appendChild(document.createTextNode("boş bırakılamaz"));
       a.appendChild(etiket);
     
     
    }
    if (mail.value == "")
    {  
        
       a = secim.children[2];
       etiket=document.createElement("span");
       etiket.id = "hata";
       etiket.className="text-danger";
       etiket.appendChild(document.createTextNode(" boş bırakılamaz"));
       a.appendChild(etiket);
  
    }
    
}

   