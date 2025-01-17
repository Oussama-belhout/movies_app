import { useState } from "react"
import MovieCard from "../components/MovieCard"


function Home({movies}){
    const [search , setSearch] = useState("")

    const handlSearchClick = (e) => {
        
    }

    return (
        <div className="home">
            <form className="search-form" >
                <input className="search-input" type="text" placeholder="Search"  />
                <button className="search-button" type="submit" onClick={handlSearchClick} >Search</button>

            </form>
            <div className="movies-grid">
                {movies.map((movie) => {
                    <MovieCard movie={movie}/>
                })}
            </div>
        </div>
    )

}

export default Home