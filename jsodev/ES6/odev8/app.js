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