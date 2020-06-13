//A)
function Araba(rengi,model,hiz){ this.rengi=rengi;this.model=model;this.hiz=hiz;}
Araba.prototype.Hizlan=function(){ return this.hiz+100;}
Araba.prototype.yavasla=function(){return this.hiz-100;}

let Kamyon={}
Kamyon.prototype=Object.create(Araba.prototype);
console.log(Kamyon);

