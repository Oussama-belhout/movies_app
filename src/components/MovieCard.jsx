

function MovieCard({movie}){

    return (
        <div className="movie-card">
            <div className="movie-overlay">
                <img src={movie.url} alt={movie.title} />
                <button className="favorite-btn">
                    ♥
                </button>
            </div>
            <div className="movie-info">
                <h2>{movie.title}</h2>*
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard