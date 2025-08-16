export default function getMovies ({query}) {
  const API_KEY = 'b4e70cae'
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`

  if (query === '') return
  try {
    return fetch(`${API_URL}${query}`)
      .then(res => res.json())
      .then(data => {
        const movies = data.Search

        return movies?.map(movie => ({
          imdbID: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          image: movie.Poster
        }))
      })
  } catch (error) {
    throw new Error ('There was a fetch error', error)
  }
}