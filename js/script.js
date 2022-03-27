"use strict";
// const obj = {
//     name: "Mary",
//     age: 25,
//     isMarried: false,
// };
// console.log(obj.name);

// alert('daina');
// const result = confirm("Are you here?");
// console.log(result);
const numberOfFilms = +prompt("Cik filmas jūs skatījāties?", "");
const personaMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: true,
};
const a = prompt("Movies name?", ""),
b = +prompt("Balles?", ""),
c = prompt("Movies name?", ""),
d = +prompt("Balles?", "");

personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;
console.log(personaMovieDB);