const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
]

// Añade tu código de bucle aquí
pelisone = 0
pelistwo = 0
for (let i = 0; i < movies.length; i++) {
  if (movies[i].releaseYear <= 1999) {
    pelisone++
  } else pelistwo++
}

console.log('pelis de antes del 99: ' + pelisone)
console.log('pelis de despues de los 2000: ' + pelistwo)
