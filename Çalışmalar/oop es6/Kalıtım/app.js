//Belli özellikleri miras almaya yarar
class Person{
    constructor(name,age){
            this.name=name;
            this.age=age;
    }
    showinfos(){
        console.log(this.name,this.age);
    }
}
class Employee extends Person{
    constructor(name,age,salary){
       super(name,age);//Miras alınan consturctor kullanmaya yarar
        this.salary=salary;
    
    }

showinfos(){
    console.log(this.name+this.age+this.salary);
}
raiseSalary(amount){
   this.salary+=amount;
}
}
const emp=new Employee("Berkan",17,2000);
console.log(emp);
emp.raiseSalary(500);