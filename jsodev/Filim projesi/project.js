const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement= document.querySelector("#director");
const urlElement= document.querySelector("#url");

// UI objesini başltama
const ui =new UI();
//Tüm eventleri yükleme
eventListeners();
function eventListeners(){
 form.addEventListener("submit",addFilm);
}
function addFilm(e){
    const title=titleElement.value;
    const direcor =directorElement.value;
    const url= urlElement.value;

    if(title==""||direcor==""||url==""){

    }
  else{ 
     const newFilm=new Film(title,direcor,url);
      ui.addFilmTıUI(newFilm);
    }
    e.preventDefault();
}