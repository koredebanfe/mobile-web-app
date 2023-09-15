

import imdblogo from './assets/imdblogo.svg';
import tomato from './assets/tomato.svg';


export default function Card({title, release_date, poster_path}){
  return (
    <div className='w-2/4' data-testid='movie-card'>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} data-testid='movie-poster' className='block'/>
      <p>USA, 2005</p>
      <h2 data-testid='movie-title'>{title}</h2>
      <p data-testid='movie-release-date'>{release_date}</p>

      <div className='flex '>
        <img src={imdblogo} alt="" />
        <p>89/100</p>
        <img src={tomato} alt="" />
      </div>

      <p>Action, Adventure</p>
    </div>
  )
}