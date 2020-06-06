// // let set=new Set();
// // set.add(100);
// // set.add(100);
// // console.log(set);
// const map =new Map();
// map.set("html",3);
// map.set("css",5);
// map.set("js",10);
// map.set("nodejs",10);

// console.log(html,css,js,nodejs);
var birinci=new Map();
birinci.set("html",3);
birinci.set("css",5);
birinci.set("js",10);
birinci.set("nodejs",10);
for (const iterator of birinci) {
  console.log(iterator);
}
birinci=new Set();
birinci.add("html");
birinci.add("css");
birinci.add("js");
birinci.add("nodejs");
console.log(birinci);