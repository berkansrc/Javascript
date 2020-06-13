// statik metotları kullanırsak obje oluşturmadan kullanılabilir
// statik metot kullanısak obje ile çağırdımızda
class Matematik{
 static cube(x){
     console.log(x*x*x);
 }
 sqrt(y){
console.log(y*y);
 }
}
const mat=new Matematik();
Matematik.cube(3);
mat.sqrt(3);