const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
]

//este es como el ejercicio basico 10, nota para mi
function averageMovieDuration(movies) {
  let totalDuration = 0
  for (let i = 0; i < movies.length; i++) {
    totalDuration += movies[i].duration
  }
  let averageDuration = totalDuration / movies.length
  return averageDuration
  // insert code
}

console.log(averageMovieDuration(movies))
