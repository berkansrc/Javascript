// Burada bir obeje'nin prototype içine başka bir obje'nin prototype'nı getirir
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