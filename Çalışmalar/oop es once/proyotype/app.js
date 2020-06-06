// function Employe(name,age){
//  this.name=name;
//  this.age=age;
// }
// Employe.prototype.showinfos=function(){
//   console.log("Name : "+name+" "+" Age: "+this.age);
// }
// const emp=new Employe("Berkan",17);
// emp.name="Berkan";
// console.log(emp);



function Person(){

}
Person.prototype.test1=()=>{
    console.log("Test 1");
}
Person.prototype.test2=()=>{
    console.log("Test 2");
}
function Employe(name){
    this.name=name;
}
Employe.prototype=Object.create(Person.prototype);
Employe.prototype.myset=()=>{
    console.log("myset");
}
const emp =new Employe("Mustafa",25);
console.log(emp);