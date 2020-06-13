var kedi1={adi:"Tiger", renk:"kahve", yas:0}
var kedi2={

}

// A)
kedi2=Object.create(kedi1);
console.log(kedi2);

//C) 
function Kedi(ad,renk){
   this.ad=ad;
   this.renk=renk;
}
//D)
let kedi3=new Kedi("oscar","gri");
console.log(kedi3);