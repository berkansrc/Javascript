let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
//A)
var {title,width,height}=options;  
console.log(title,width,height)
//B)
var{title}=options;
console.log(title);
//c)
var{title,a={...options}}=options;
console.log(title,a);