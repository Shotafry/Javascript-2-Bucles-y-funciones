const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
]

// Añade tu código de bucle aquí

let songsbygenre = {}

for (let i = 0; i < tracks.length; i++) {
  if (songsbygenre[tracks[i].genre]) {
    songsbygenre[tracks[i].genre].push(tracks[i].title)
  } else {
    songsbygenre[tracks[i].genre] = [tracks[i].title]
  }
}
console.log('Canciones ordenadas por genero:')
console.log(songsbygenre)
