const person={
   name:"Murat",
   lastname:"Özergül",
   year:"13.07.1978",
   Education:"Marmara üniversitesi Fizik"
}
for(let item in person){
    console.log(person[item]);
}

const langs=["c#","python","Java"];
for(let item of langs){
    console.log(item);
}