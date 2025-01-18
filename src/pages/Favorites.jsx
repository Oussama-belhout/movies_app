import "../css/Favorites.css"
import MovieCard from '../components/MovieCard'; // Ensure you have the correct import for MovieCard


function Favorites(){
    const stored_movies = localStorage.getItem('favorites')
    const movies = stored_movies ? JSON.parse(stored_movies) : [];

    if (movies.length > 0) {
        return (
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        );
    } else {
        return (
            <div className="favorites">
                <h2>No favorites yet</h2>
                <p>Add movies to be placed here</p>
            </div>
        );
    }
}
export default Favorites