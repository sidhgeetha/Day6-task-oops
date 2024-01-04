class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {                                  
    let result = [];
    for (let i in movies) {
      let obj = movies[i];
      if (obj.rating == "PG") {
        result.push(obj);
      }
    }
    return result;
    // const pgMovies = movies.filter(function (movie) {
    //   return movie.rating === "PG";
    // });
    // return pgMovies;
  }
}

const movie1 = new Movie("Bigboss", "Vijay Tv");
const movie2 = new Movie("Leo", "Sun Tv", "PG");
const movie3 = new Movie("Dunki", "UTV", "15");
const movie4 = new Movie("Xmen", "Hollywood", "18");
const movie5 = new Movie("Casino Royale", "Eon Productions", "PG­13");

let movies = [movie1, movie2, movie3, movie4];
result = Movie.getPG(movies);
console.log(result);

//Regular method regular method we create a object for that class to invoke that method."
//static method is from the class itself. andn we can use it directly without creating object.

//Regular Method:
//You create an object for each movie.
//You ask each movie individually about its rating.

// Static Method:
// You don't need to create objects for each movie.
// You use a special spell (static method) that quickly finds all the movies with a specific rating without asking each one separately.
//when you use a static method, you don't need to create objects for each movie. The static method is 
//like a powerful spell that knows how to find all the "PG" movies in one go.