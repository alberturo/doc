//

const movies = [
  {
    title: "lord of the rings",
    director: "Peter Jackson",
    viewed: true,
  },
  {
    title: "Justice league",
    director: "Zack Snyder",
    viewed: false,
  },
  {
    title: "Avengers",
    director: "Joe Russo",
    viewed: false,
  },
  {
    title: "Batman vs Superman",
    director: "Zack Snyder",
    viewed: true,
  },
];

function showMovies(movies) {
  let toShow = "";
  for (movie of movies) {
    toShow = `${movie.title} of ${movie.director}`;
    if (movie.viewed) {
      console.log("You've watched: ", toShow);
    } else {
      console.log("You haven't watched: ", toShow);
    }
  }
  return toShow;
}

console.log(showMovies(movies));
