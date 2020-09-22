// Http status
//200: ok
//403: forbidden
//404: not found
//505: internal server error
// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
+

document.getElementById("btn").addEventListener("click",function(){//butonu seçtik
     // XMLHttpRequest
     const xhr=new XMLHttpRequest();// Bu obje ajax işlemlerini gerçekleştirmeye yarıyor

    //  xhr.onreadystatechange=function(){
    //      //console.log(this.responseText);
    //      if(this.status==200&&this.readyState==4){
    //          //Response hazırdır
    //          console.log(xhr.responseText);
    //      }
    //  }
    xhr.onload=function(){ //Bura sadece response hazır olduğunda çalışır yani ready state 4 olunca
        //burada hata mesajı almak istemezsek
        if(this.status==200){document.getElementById("ajax").textContent=xhr.responseText}
        
    }
    xhr.onprogress=function(){
        console.log("Progess...",this.readyState);
    }
     xhr.open("GET","example.txt",true);//True ise assenkron false ise senkron
    //  requıestler GET POST DELETE PUT
    // GET : Veri almak için
    // POST : Veri göndermek için
    // PUT : Veri güncellemek için
    // DELETE: Veri silmek için
     xhr.send(); // Eğer biz post yazsaydık Buraya göndereceğimiz ifade yazılır
});