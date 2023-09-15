import axios from "axios"

export const movieList = async () => {
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=62dfb24cd1a981ce8cdd4a3642839fba')
    .then()
    return res.data.results
}