// A)
sor=(soru,evet,hayır)=>{if (confirm(soru)) evet(); else hayır();}

// B)
let topla=(a,b)=>{return a+b};
console.log(topla(5,6));
// C)
const kon=(name,text)=>{
    var konusan="Konusan";
    return konusan+" "+name+": "+text;
}
console.log(kon("Aslı","Bugün hava çok güzel"));
