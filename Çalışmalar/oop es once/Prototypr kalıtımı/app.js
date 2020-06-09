function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.Show=()=>{
    console.log(this.name,this.age);
}
 const person=new Person("Mert",27);
function Employee(name,age,salary){
    // this.name=name;
    // this.age=age;
    this.salary=salary;
    person.call(this,name,age);
} 
 Employee.prototype=Object.create(Person.prototype);
 const emp=new Employee("Mustafa",25,1000);
 console.log(emp);
 Employee.prototype.Show=()=>{
     console.log(this.salary);
 };
emp.Show();
console.log(emp.toString());
console.log(emp);