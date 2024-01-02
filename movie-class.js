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

let movies = [movie1, movie2, movie3, movie4];
result = Movie.getPG(movies);
console.log(result);
