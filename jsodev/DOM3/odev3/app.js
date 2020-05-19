function Kontrol()
{
    var mail = document.getElementById("mail").value;
    var karkter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    while(karkter.test(mail) == false){
        alert("Hatalı giriş yaptınız.");
        return false;
    }
     alert("Doğru giriş yaptınız.");
     
}