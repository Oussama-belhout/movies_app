import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import "../services/api.js"
import { getPopularMovies, searchMovies } from "../services/api.js"


function Home(){

    const [search , setSearch] = useState("")
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () =>{
            try {
                const m = await getPopularMovies()
                setMovies(m)
            } catch (error) {
                setError("Failed to load popular movies")
            } finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    } , [])


    const handlSearchClick = async (e) => {
        e.preventDefault()
        
        if(!search.trim) return
        if(loading) return

 
            setLoading(true)
            try {
                const query = await searchMovies(search)
                setMovies(query)
                setError(null)
            } catch (error) {
                setError("Failed to fetch requested movies")
            } finally {
                setLoading(false)
            }
        
    }
    const handlInputChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="home">
            <form className="search-form" >
                <input className="search-input" type="text" placeholder="Search" onChange={handlInputChange} />
                <button className="search-button" type="submit" onClick={handlSearchClick} >Search</button>

            </form>
            <div className="movies-grid">
            
            {Array.isArray(movies) && movies.map((movie) => (

                        <MovieCard movie={movie} key={movie.id} />
   
                    
                ))}
                {error && <p>{error}</p>}
                {loading && <p>Loading...</p>}
            </div>
            <div></div>
        </div>
    )

}

export default Home