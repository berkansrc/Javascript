

let maaslar = {
  "Ali": 100,
   "Ayşe":300,
   "Ahmet": 250
 };
let enbuyuk=0;
let dizi=Object.values(maaslar);
for(let i=0;i<dizi.length;i++)
{
  if(dizi[i]>enbuyuk){
    enbuyuk=dizi[i];
  }
}
let a={Ali,Ayşe,Ahmet}=maaslar;
console.log("En büyük = "+enbuyuk);
for (const iterator in a) {
  console.log(a[iterator]);
}
    

