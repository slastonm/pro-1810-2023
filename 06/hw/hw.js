function FilmMaker(filmName, yearProduction, rating){
    this.filmName = filmName;
    this.yearProduction = yearProduction;
    this.rating = rating;
}

const films = [
    new FilmMaker('Film1', 2020, 8),// Ctl+c cmnd + c
    new FilmMaker('Film2', 2023, 5),
    new FilmMaker('Film3', 2021, 7),
    new FilmMaker('Film4', 2021, 6),
    new FilmMaker('Film5', 2022, 9)

];

console.log(films);
FilmMaker.prototype.displayInfo = function(){
    console.log(`Film: ${this.filmName} year: ${this.yearProduction} rating: ${this.rating}`);
}

// films[1].displayInfo();
films.forEach(film=>film.displayInfo());

function sortFilmsByYear(films){
    // return films.slice().sort((a, b)=>a.yearProduction-b.yearProduction);
    return films.slice().sort((a, b)=>a.rating-b.rating);

}

const sortedFilms = sortFilmsByYear(films);
console.log(sortedFilms);

const strings = ["apple", "banana", "orange"]; 
const upperStrings = strings.map(str=>str.toUpperCase());

console.log(upperStrings);
