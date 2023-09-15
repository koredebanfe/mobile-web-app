
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Card from './Card';



// function Movies() {
//     const [movies, setMovies] = useState([])
    

//     useEffect(
//         ()=>{
//             axios.get('https://api.themoviedb.org/3/movie/popular?api_key=62dfb24cd1a981ce8cdd4a3642839fba')
//             .then(response=>{
//                 setMovies(response.data.results);
//                 console.log(movies)
//             }).catch(err=>{console.log(err)})
//         },
//         []
//     );

//     return (
//         <div>
//             {
//                 movies.map(movie =><Card key={movie.title} {...{...movie}}/>)

//             }
//         </div>
//     )

    
// }

// export default Movies


import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import { Link } from 'react-router-dom';



function MoviesList() {
    const [movies, setMovies] = useState([]);

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
        <ul>
            {
                movies.map(movie=>{
                    return (
                        <li key={movie.id}>
                            
                            <Link to={`movie/${movie.id}`}>
                            <Card {...{...movie}} />
                            </Link>
                            
                        </li>
                    )
                })
            }
        </ul>
    )

    
}

export default MoviesList