function Employe(name,age,salary){
this.name=name;
this.age=age;
this.salary=salary;
// console.log(this);//bütün employe ları çalıştırır
}
const emp1=new Employe("Berkan",17,1000);
const emp2=new Employe("İpek",19,2000);
console.log(emp1);