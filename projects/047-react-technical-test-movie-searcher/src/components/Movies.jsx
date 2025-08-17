function withResults({ movies }) {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.imdbID}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.image} alt="Movie's poster" />
          </li>
        ))
      }
    </ul>
  )
}

function withoutResults() {
  return (
    <p>No results for this search</p>
  )
}

export default function Movies ({ movies }) {
  if (!movies) return
  if (movies && movies.length > 0) {
    const moviesArray = movies
    return withResults({ movies: moviesArray })
  } else {
    return withoutResults()
  }
}