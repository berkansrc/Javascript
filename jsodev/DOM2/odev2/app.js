



  let gövde = document.createElement("tbody"); 
  let tablo = document.createElement("table");
  let kafa = document.createElement("thead");
    let marka = document.getElementById("marka");
  let fiyat = document.getElementById("fiyat");
    let tur = document.getElementById("tur");
 let urunad = document.getElementById("urunad");
  let baslik;
  let satir;
  let yazi;
  let sayac=1;
  let konum = document.getElementById("burasi");
 function kaydet()
   {  
       
       if (sayac == 1)
       {
         tablo.className = "table table-danger mt-3";
         tablo.appendChild(kafa);
         satir = document.createElement("tr");
         kafa.appendChild(satir);
        
         baslik = document.createElement("th");
         baslik.scope ="col";
         satir.appendChild(baslik);
 
         baslik.appendChild(document.createTextNode("#"));

        baslik = document.createElement("th");
        baslik.scope ="col";
        satir.appendChild( baslik);
  
        baslik.appendChild(document.createTextNode("Ürün ad"));
    
        baslik = document.createElement("th");
        baslik.scope ="col";
        satir.appendChild(baslik);
 
        baslik.appendChild(document.createTextNode("Fiyat"));
    
        baslik = document.createElement("th");
        baslik.scope="col";
        satir.appendChild(baslik);
  
        baslik.appendChild(document.createTextNode("Tür"));
      
        baslik = document.createElement("th");
        baslik.scope="col";
        satir.appendChild( baslik);
      
        baslik.appendChild(document.createTextNode("Marka"));
       tablo.appendChild(gövde);
       }
       satir = document.createElement("tr");
       gövde.appendChild(satir);
    
       baslik = document.createElement("th");
       baslik.scope="row";
       satir.appendChild( baslik);
     
       baslik.appendChild(document.createTextNode(sayac));
       
       yazi= document.createElement("td");
       satir.appendChild(yazi);
       yazi.appendChild(document.createTextNode(urunad.value));
    
       yazi = document.createElement("td");
       satir.appendChild( yazi);
       yazi.appendChild(document.createTextNode(fiyat.value));
    
       yazi = document.createElement("td");
       satir.appendChild( yazi);
       yazi.appendChild(document.createTextNode(tur.value));
    
        yazi = document.createElement("td");
        satir.appendChild(yazi);
        yazi.appendChild(document.createTextNode(marka.value));
    
        sayac = sayac + 1;
       if (sayac == 4)
      {
          console.log(tablo);
      }
    
      konum.appendChild(tablo);
   }