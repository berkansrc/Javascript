
const mapicin=new Map();
mapicin.set(0,{"id":"html","price":3});
mapicin.set(1,{"id":"css","price":5});
mapicin.set(2,{"id":"js","price":10});
mapicin.set(3,{"id":"nodejs","price":10});


const a={id,price}=mapicin;
for (const iterator of a) {
  console.log(iterator);
}