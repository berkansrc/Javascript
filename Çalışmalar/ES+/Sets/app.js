const set1=new Set(["Berkan","Saraç"]);
console.log(set1);
set1.add(17);
set1.add("Bilişim");

console.log(set1);
set1.delete("Saraç");
set1.forEach(function(set){
    
console.log(set);
})
set1.delete(17);
console.log(set1,set1.has(17));
