// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map( movie => movie.director)
}

//bonus


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
  
    const spielbergDramas = moviesArray.filter(movie => 
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  
    return spielbergDramas.length;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
  
    const sumOfScores = moviesArray.reduce((total, movie) => {
      if (typeof movie.score === "number") {
        return total + movie.score;
      } else {
        return total;
      }
    }, 0);
  
    const averageScore = Math.round((sumOfScores / moviesArray.length) * 100) / 100;
    return averageScore;
  }
  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
  
    if (dramaMovies.length === 0) {
      return 0;
    }
  
    const sumOfScores = dramaMovies.reduce((total, movie) => {
      if (typeof movie.score === "number") {
        return total + movie.score;
      } else {
        return total;
      }
    }, 0);
  
    const averageScore = Math.round((sumOfScores / dramaMovies.length) * 100) / 100;
    return averageScore;
  }
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const peliculasOrdenadas = [...moviesArray];
  
    peliculasOrdenadas.sort((movie1, movie2) => {
      if (movie1.year !== movie2.year) {
        return movie1.year - movie2.year; 
      } else {
        return movie1.title.localeCompare(movie2.title);
      }
    });
    return peliculasOrdenadas;
  }
  
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    const titulosOrdenados = [...moviesArray]
      .map(movie => movie.title) 

      .sort((title1, title2) => title1.localeCompare(title2)); 
  
    return titulosOrdenados.slice(0, 20);
  }
  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const convertedMovies = moviesArray.map(movie => {
      const { title, year, director, genre, score } = movie; 
      const duration = movie.duration;
      let minutes = 0;
  
      const hoursMatch = duration.match(/(\d+)h/);
      const minutesMatch = duration.match(/(\d+)min/);
  
      if (hoursMatch) {
        minutes += Number(hoursMatch[1]) * 60; 
      }
  
      if (minutesMatch) {
        minutes += Number(minutesMatch[1]);
      }
  
      return {
        title,
        year,
        director,
        duration: minutes,
        genre,
        score
      };
    });
  
    return convertedMovies;
  }
  

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
      return null;
    }
  
    const yearScores = {};
  
    for (const movie of moviesArray) {
      const year = movie.year;
      const score = movie.score;
  
      if (!yearScores[year]) {
        yearScores[year] = {
          totalScore: 0,
          movieCount: 0
        };
      }
  
      yearScores[year].totalScore += score;
      yearScores[year].movieCount++;
    }
  
    let bestYear = "";
    let bestAverage = 0;
  
    for (const year in yearScores) {
      const averageScore = yearScores[year].totalScore / yearScores[year].movieCount;
  
      if (
        averageScore > bestAverage ||
        (averageScore === bestAverage && year < bestYear) ||
        bestYear === ""
      ) {
        bestYear = year;
        bestAverage = averageScore;
      }
    }
  
    return `The best year was ${bestYear} with an average score of ${averageWithTwoDecimals(bestAverage)}`;
  }
  
  function averageWithTwoDecimals(number) {
    return Math.round(number * 100) / 100;
  }
  