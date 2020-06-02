let isimler = ["Ahmet", "Ali", "Ahmet", "Ayşe",
  "Ali", "Ahmet", "Veli", "Ayşe",];
let benzersiz=new Set();
for (const iterator of isimler){
   benzersiz.add(iterator);
}
console.log(benzersiz);
