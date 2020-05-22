function Kontrol()
{
    var mail = document.getElementById("mail").value;
    var karkter = /^([\w\-\.])+\@([\w\-\.])+\.([\w]{2,4})$/;
    while(karkter.test(mail) == false){
        alert("Hatalı giriş yaptınız.");
        return false;
    }
     alert("Doğru giriş yaptınız."); 
} 
