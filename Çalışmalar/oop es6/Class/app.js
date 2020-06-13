class Employee{
    constructor(name,age,salary){
       this.name=name;
       this.age=age;
       this.salary=salary;
    }
    show(){
    console.log(this.name+" "+this.age+" "+this.salary);
    }
}
const emp=new Employee("Berkan",17,2000);
// Classlar yapıcı obje yaratmaya yarar
//Counstruct yapmaya yarar ve bir obje oluşturur