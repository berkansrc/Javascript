//call ve apply bir fonksiyonu bir objeye bağlamaya yarar
//bind fonksiyonları kopyalayabilir
const obj1={
    number1:100,
    number2:200
}
const obj2={
    number1:30,
    number2:40
}

function addnumber(number3,number4){
   console.log(+this.number1+this.number2+number3+number4);
}
addnumber.call(obj1,200,100);//Call
addnumber.apply(obj2,[100,200]);//Parametre array olarak verilir callla aynı

function getnumber(number3,number4){
    console.log(+this.number1+this.number2+number3+number4);
 }
 const copy=getnumber.bind(obj1);
 copy(100,200);