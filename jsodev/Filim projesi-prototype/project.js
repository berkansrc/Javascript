const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement= document.querySelector("#director");
const urlElement= document.querySelector("#url");
const cardbody=document.querySelectorAll(".card-body")[1];
const clearfilm=document.getElementById("clear-films");

// UI objesini başltama
const ui =new UI();

// Storage Objesi
const storage =new Storage();
//Tüm eventleri yükleme
eventListeners();
function eventListeners(){
 form.addEventListener("submit",addFilm);
document.addEventListener("DOMContentLoaded",function(){
  let films=storage.getFilmsFromStorage();
  ui.loadAllFilms(films);
  
}); 
clearfilm.addEventListener("click",clearAllFilms);
cardbody.addEventListener("click",deleteFilm);
}
function addFilm(e){
    const title=titleElement.value;
    const direcor =directorElement.value;
    const url= urlElement.value;

if(title==""||direcor==""||url==""){
ui.displayMessege("Tüm Alanları doldurun","danger");
    
}
  else{ 
     const newFilm=new Film(title,direcor,url);
      ui.addFilmToUI(newFilm);  
      storage.addFilmToStorage(newFilm);
      ui.displayMessege("Film eklenmiştir","success");
    }
   ui.clearInput(titleElement,directorElement,urlElement);

   e.preventDefault();
}
function deleteFilm(e){
   if(e.target.id=="delete-film"){
     ui.delteFilmUI(e.target);
     storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
     ui.displayMessege("Filim Silindi","success");
   }
}
function clearAllFilms(){
  if(confirm("Tüm Filmleri Temizlemek İstediğinizden Emin misiniz?")){
  ui.clearAllFilmsFromUI();
  storage.clearAllFilmsFromStorage();
  }
}