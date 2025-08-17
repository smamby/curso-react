export default async function getNewMovies ({ query }) {
  const API_KEY = 'b4e70cae'
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`

  if (query === ' ') return
  try {
    const res = await fetch(`${API_URL}${query}`)
    const data = await res.json()
    const movies = data.Search

    return movies?.map(movie => ({
      imdbID: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  } catch (error) {
    throw new Error('Error getting movies from the API', error)
  }
}