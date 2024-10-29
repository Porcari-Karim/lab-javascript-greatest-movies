// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (moviesArray) => moviesArray.map(movie => movie.director);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (moviesArray) => moviesArray.filter((movie) => (movie.director === 'Steven Spielberg') && (movie.genre.includes('Drama'))).length;

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (moviesArray) => !moviesArray.length ? 0 : Math.round(moviesArray.reduce((acc, curr) => curr.score ? acc + curr.score : acc, 0) / moviesArray.length * 100) / 100;

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (moviesArray) => scoresAverage(moviesArray.filter(movie => movie.genre.includes('Drama')));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (moviesArray) => moviesArray.toSorted((a, b) => a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (moviesArray) => moviesArray.map(movie => movie.title).toSorted((a, b) => a.localeCompare(b)).slice(0, 20);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const parseDurationString = (duration) => {
    const [hoursString, minutesString] = duration.split(' ');
    return (parseInt(hoursString) || 0) * 60 + (parseInt(minutesString) || 0);
}

const turnHoursToMinutes = (moviesArray) => moviesArray.map(movie => {
    return {
        ...movie, 
        duration : parseDurationString(movie.duration)
    }
})

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
const bestYearAvg = (moviesArray) => {
    if(!moviesArray.length) return null;
    let bestYear = {
        year: null,
        score: 0,
    };
    const sortedUniqueYears = [...new Set(moviesArray.map(movie => movie.year))].toSorted((a, b) => b - a);
    sortedUniqueYears.forEach(year => {
        const yearAverage = scoresAverage(moviesArray.filter(movie => movie.year === year));
        if(yearAverage >= bestYear.score){
            bestYear = {
                year : year,
                score : yearAverage
            };
        }
    })
    return `The best year was ${bestYear.year} with an average score of ${bestYear.score}`;
}
