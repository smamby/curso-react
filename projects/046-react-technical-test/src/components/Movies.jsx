function withResults({ movies }) {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.imdbID}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.image} alt='movie poster' />
          </li>
        ))
      }
    </ul>
  )
}

function withoutResults () {
  return <p>No results for this search</p>
}

export default function Movies ({ movies }) {
  if (!movies || movies.length === 0) {
    return withoutResults()
  } else {
    return withResults({ movies: movies })
  }
}