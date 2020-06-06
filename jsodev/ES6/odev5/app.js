let maaslar = {
  "Ali": 100,
  "Ayşe": 300,
  "Ahmet": 250
};
if(maaslar.Ali>maaslar.Ayşe || maaslar.Ali>maaslar.Ahmet){
console.log("En büyük maaş : Ali : "+maaslar.Ali);
}
else if(maaslar.Ayşe>maaslar.Ali ||maaslar.Ayşe>maaslar.Ahmet ){
  console.log("En büyük maaş : Ayşe : "+maaslar.Ayşe);
}
else if(maaslar.Ahmet>maaslar.Ali ||maaslar.Ahmet>maaslar.Ayşe){
  console.log("En büyük maaş : Ahmet : "+maaslar.Ahmet);
}

const a= {Ali,Ayşe,Ahmet}=maaslar;

for (const iterator in a) {
  console.log(iterator,a[iterator]);
}
