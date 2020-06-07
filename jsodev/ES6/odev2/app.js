var kisiler=[
   
    {
        id:1,
        ad:"Berkan",       
        soyad:"Saraç"
    },
    {
        id:2,
        ad:"İpek filiz",
        soyad:"Yazıcı"
    },
    {
        id:3,  
        ad:"Umut",
        soyad:"Köroğlu"
    },
 
]

adcagirma=()=>{ 
   const name= kisiler.map(function(adi){
     return adi.ad;  
    });
    console.log(name);
}
adcagirma();