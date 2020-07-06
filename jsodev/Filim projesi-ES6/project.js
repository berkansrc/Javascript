const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement= document.querySelector("#director");
const urlElement= document.querySelector("#url");
const cardbody=document.querySelectorAll(".card-body")[1];
const clearfilm=document.getElementById("clear-films");


//Tüm eventleri yükleme
eventListeners();
function eventListeners(){
 form.addEventListener("submit",addFilm);
document.addEventListener("DOMContentLoaded",function(){
  let films=Storage.getFilmsFromStorage();
  UI.loadAllFilms(films);
  
}); 
clearfilm.addEventListener("click",clearAllFilms);
cardbody.addEventListener("click",deleteFilm);
}
function addFilm(e){
    const title=titleElement.value;
    const direcor =directorElement.value;
    const url= urlElement.value;

if(title==""||direcor==""||url==""){
  UI.displayMessege("Tüm Alanları doldurun","danger");
    
}
  else{ 
     const newFilm=new Film(title,direcor,url);
      UI.addFilmToUI(newFilm);  
      Storage.addFilmToStorage(newFilm);
      UI.displayMessege("Film eklenmiştir","success");
    }
    UI.clearInput(titleElement,directorElement,urlElement);

   e.preventDefault();
}
function deleteFilm(e){
   if(e.target.id=="delete-film"){
     UI.delteFilmUI(e.target);
     Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
     UI.displayMessege("Filim Silindi","success");
   }
}
function clearAllFilms(){
  if(confirm("Tüm Filmleri Temizlemek İstediğinizden Emin misiniz?")){
  UI.clearAllFilmsFromUI();
  Storage.clearAllFilmsFromStorage();
  }
}