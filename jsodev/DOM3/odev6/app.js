
function adet() {
var deger = Number(document.getElementById("adet").value);
localStorage.setItem("miktar",document.getElementById("adet").value = deger + 1)  }
document.getElementById("adet").value=localStorage.getItem("miktar");