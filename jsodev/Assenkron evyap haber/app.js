document.addEventListener("DOMContentLoaded",function(){
   const xhr=new XMLHttpRequest();
   xhr.open("GET","https://cors-anywhere.herokuapp.com/http://mrevyap.k12.tr/mob_uygulama/haberler.php");
   xhr.send();
   xhr.onload=function(){
            const list=document.getElementById("haber");
            if(this.status==200){

            const haberler=JSON.parse(this.responseText);
            haberler.forEach(function(haber) {
            list.innerHTML+=
            `
            <tr>
            <td><img src="${haber.resim}" class="img-fluid img-thumbnail"></td>
            <td>${haber.baslik}</td>
            <td>${haber.link}</td>
            </tr> 
            `
           });
       }
   }
});