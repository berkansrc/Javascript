// // While
// i=0
// z=0
// while(i<5)
// {
// console.log(i);
// i++;
// }
// //doWhile
// do{
// console.log(z)
// z++;
// }while(z<20)
// //For
// for(let c=0; c<10; c++){
//     console.log(c);
// }

// // Foreach
// let programmer=["C#","Java","Python","C","C++"];
// programmer.forEach(function(a){
//     console.log(a);
// })

//map
// let list=[
//     {name:"Berlman",ade:1},
//     {name:"berlan",ade:2},
//     {name:"qdasd",ade:3},
// ];
// const names=list.map(function(ad){
//  return ad.ade;
// });

// console.log(names);
// var a=10;
// let b=20;
// const c=30;

// if(true){
// var a=40;
// let b=50;
// const c=60;
// console.log(a,b,c);
// }
// console.log(a,b,c);
// const elements=document.all;

// const araba=["C#","Java","Html"];
// // item indis araba value
// for(let item in araba){
//     console.log(araba[item]);
// }

//Scope (Kapsam)
// değişke'nin nerede vaar olabileceğini göstermeye yarar

//1. Global scope
const sifre=1234;
//2. Function scope



//3. Block scope
if(true){
 const sifre=234;
 console.log(sifre);
}
console.log(sifre);
