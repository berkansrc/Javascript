let element=document.getElementById("baglanti");//odev3
let dizi=[element.type,element.hreflang,element.target,element.href]
function ozelliklerial(){
    dizi.forEach(function(a){
    console.log(a);
    })
}
let kelime2=document.querySelector(".kelimeler").innerHTML;//odev5
let dizi3=[kelime2.split(" ")];
let element2;
let element3;
console.log(dizi3[0].length);

for (let index = 0; index < dizi3.length; index++) {//Ödev4
     element2 = dizi3[index]; 
    for (let index1 = 0; index1 < element2.length; index1++) {
       element3=element2[index1];
       
        if (element3.length==5){
            
            if (element3[element3.length-1]!=","&& element3[element3.length-1]!=".") {
               document.writeln("<font color='red'>"+element3+"</font>"); 
            }
        }
        if(element3.length==6){
            if(element3[element3.length-1]==",")
            {
               
                    document.writeln("<font color='red'>"+element3[0],element3[1],element3[2],element3[3],element3[4]+"</font>");
            }
        }
    }
}

