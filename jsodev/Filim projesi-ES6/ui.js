class UI{
static addFilmToUI(newFilm) {
    console.log(newFilm);

    const filmList = document.getElementById("films");
    filmList.innerHTML += `
 <tr>
      <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
      <td>${newFilm.title}</td>
      <td>${newFilm.director}</td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>
 `
}


static clearInput(element1,element2,element3){
    element1.value="";
    element2.value="";
    element3.value="";
}
static displayMessege (messege,type){

const div=document.createElement("div");
const cardbody=document.querySelector(".card-body");
div.className=`alert alert-${type}`;
div.textContent=messege;
cardbody.appendChild(div);
setTimeout(function(){
div.remove();
},1000)
}

static loadAllFilms (films){
  const filmList=document.getElementById("films");
   films.forEach(function(film){
   filmList.innerHTML+=`<tr>
   <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
   <td>${film.title}</td>
   <td>${film.director}</td>
   <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
   </tr>`;
   });
}
static delteFilmUI (element){
    element.parentElement.parentElement.remove();
}
static clearAllFilmsFromUI(element){
    const filmList=document.getElementById("films");
    while(filmList.firstElementChild!==null){
        filmList.firstElementChild.remove();
    }
}
}