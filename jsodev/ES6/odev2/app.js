let adi=new Map();
var kisiler={
    kisi1:{
        ad:adi.set("ad","Berkan"),
        soyad:"Saraç"
    },
   
    
}
let adcagirma=()=>{
    let dizi=new Array();
    dizi.push(adi.get("ad"));
    for (const iterator of dizi) {
        console.log(iterator);
    }
}
adcagirma();