var app=angular.module("myapp", [])

app.service("movieService",function(){


      this.movieList={
        "page": 1,
        "per_page": 10,
        "total": 97,
        "total_pages": 10,
        "data": [
          {
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg",
            "Title": "The Maze Runner",
            "Type": "movie",
            "Year": 2014,
            "imdbID": "tt1790864"
          },
          {
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MDU2NzQyMl5BMl5BanBnXkFtZTgwMzQxMDQ3NTE@._V1_SX300.jpg",
            "Title": "Maze Runner: The Scorch Trials",
            "Type": "movie",
            "Year": 2015,
            "imdbID": "tt4046784"
          },
          {
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExOTkxMTIzN15BMl5BanBnXkFtZTgwNjcxNzY2NTE@._V1_SX300.jpg",
            "Title": "Into the Grizzly Maze",
            "Type": "movie",
            "Year": 2015,
            "imdbID": "tt1694021"
          },
          {
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwNDg4MjIyMV5BMl5BanBnXkFtZTcwNDEwMzkxMQ@@._V1_SX300.jpg",
            "Title": "Maze of the Minotaur",
            "Type": "movie",
            "Year": 1994,
            "imdbID": "tt0110018"
          },
          {
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTVkMTFhMjQtNmY0Ny00ZDE5LWFhMDItNDJlNTNlMTE3ZmQ5XkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_UY1200_CR142,0,630,1200_AL_.jpg",
            "Title": "The Crystal Maze",
            "Type": "series",
            "Year": 1990,
            "imdbID": "tt0098774"
          },
          {
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0MTAxODI3N15BMl5BanBnXkFtZTcwMjI1NTk5Mw@@._V1_SX300.jpg",
            "Title": "The Maze",
            "Type": "movie",
            "Year": 2010,
            "imdbID": "tt1675758"
          },
          {
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwNzE5MTA1NF5BMl5BanBnXkFtZTcwODQ3NzkxMQ@@._V1_SX300.jpg",
            "Title": "Maze",
            "Type": "movie",
            "Year": 2000,
            "imdbID": "tt0246072"
          },
          {
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDY4NDAxNjgzOF5BMl5BanBnXkFtZTcwNDEyMjAzMQ@@._V1_SX300.jpg",
            "Title": "Iron Maze",
            "Type": "movie",
            "Year": 1991,
            "imdbID": "tt0102128"
          },
          {
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2Mjk1MDE3OF5BMl5BanBnXkFtZTcwOTk2OTYxMg@@._V1_SX300.jpg",
            "Title": "The Maze",
            "Type": "movie",
            "Year": 1953,
            "imdbID": "tt0046057"
          },
          {
            "Poster": "https://i.ytimg.com/vi/m0ppeYBqdGo/movieposter.jpg",
            "Title": "Maze Runner: The Burn Trials",
            "Type": "movie",
            "Year": 2015,
            "imdbID": "tt4844320"
          },
          {
            "Poster": "https://i.ytimg.com/vi/m0ppeYBqdGo/movieposter.jpg",
            "Title": "srinivas",
            "Type": "movie",
            "Year": 2015,
            "imdbID": "tt4844320"
          }
        ]
      }




})

app.controller("movieController", function($scope,movieService) {

$scope.search=function(movie){

  $scope.movieName=movie;
  $scope.movieList=movieService.movieList.data;
  $scope.perpage=movieService.movieList.per_page;


}
});
