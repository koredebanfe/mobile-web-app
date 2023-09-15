import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";



// import {getMovieList} from "./MovieList";
// import { useLoaderData } from "react-router-dom";

// export async function loader({params}) {
//     const movies = await getMovieList(params.movieId);
//     return {movies};
// }

export default function Movie() {
    const [movies, setMovies] = useState([]);
    const { movieId } = useParams();

    useEffect(
        ()=>{
            axios.get('https://api.themoviedb.org/3/movie/popular?api_key=62dfb24cd1a981ce8cdd4a3642839fba')
            .then(response=>{
                setMovies(response.data.results);
                console.log(movies)
            }).catch(err=>{console.log(err)})
        },
        []
    );
    
    
    return (
       movies.map(movie=>{
        const movieid = movie.id;
         return ((movieid==movieId) ?
          <div>
            <h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt='block' className='block'/>

                {movie.title}
                {movie.release_date}
                {movie.runtime}
                {movie.overview}
            </h2>
         </div>: "")
       })

    )

}




