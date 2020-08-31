import React, {useState} from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

export default function MovieSearch() {
    //states- input query movies
const [query, setQuery] = useState('');
//create the state for movies, and update that state appropriate
const [movies, setMovies] = useState([]);

      async function searchMovies(e) {
        e.preventDefault()
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b1b41264c411cdaedd80509c57257edc&language=en-US&query=${query}&page=1&include_adult=false`);
        //   console.log(response)
        const data = response.data.results
          setMovies(data);
        //   console.log(data.overview);
        } catch (error) {
          console.error(error);
        }
      }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                    <label htmlFor="query" className="label">Movie Title</label>
                    <input type="text" name="query" className="input" placeholder="enter movie name here" value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <button className="button" type="submit">Submit</button>
                </form>
                <div className="card-list">
                    {movies.filter(movie => movie.poster_path).map(movie => (
                        // <h3>{movie.title}//////////{movie.overview}</h3>
                       <MovieCard movie={movie}  key={movie.id} />
                    ))}
                </div>
        </>
    )
}
