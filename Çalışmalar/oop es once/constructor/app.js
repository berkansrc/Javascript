// const emp1={//object literal
//     name:"Berkan",
//     age:17,
//     showInfos:()=>{console.log("Biligiler gösteriliyor...");}
// }
// const emp2={
//     name:"İpek",
//     age:19,
    
// }
// emp1.showInfos();
// console.log(emp1);

function Employe(name,age,salary){
this.name=name;
this.age=age;
this.salary=salary;
// console.log(this);//bütün employe ları çalıştırır
}
const emp1=new Employe("Berkan",17,1000);
const emp2=new Employe("İpek",19,2000);
console.log(emp1);

// NOTLAR
// 1-this anahtar kelimesi objeyi gösterilir 
// 2- Consturctor Birden fazla obje oluştururken onlara yapıcı özellikler verilir