//Bu çalışmada başka bir api dan veri çekmeye çalışıcaz
document.getElementById("change").addEventListener("click",change);
function change(){
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://api.exchangeratesapi.io/latest");
    xhr.onload=function(){
        const response=JSON.parse(this.responseText);
        if(this.status==200){
            const rate=response.rates.TRY
            const amount=Number(document.getElementById("amount").value);
            console.log(amount*rate);
            document.getElementById("tl").value=amount*rate;
        }
    }
    xhr.send();
}