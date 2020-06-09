//A)
function Araba(rengi,model,hiz){ this.rengi=rengi;this.model=model;this.hiz=hiz;}
Araba.prototype.Hizlan=function(){ return this.hiz+100;}
Araba.prototype.yavasla=function(){return this.hiz-100;}
var araba1=new Araba("kırmızı","fiat",1000);
console.log(araba1);
console.log(araba1.Hizlan());
console.log(araba1.yavasla());
var araba2=new Araba("Bordo","Şahin",500);
console.log(araba2);
console.log(araba2.Hizlan());
console.log(araba2.yavasla());

// B)
let Kamyon={

}
Kamyon.prototype=Object.create(Araba.prototype);
console.log(Kamyon);