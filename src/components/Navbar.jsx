import {Link} from 'react-router-dom'

function Navbar(){


    return (
        <div className="navbar">
            <Link to="/" className='navbar-brand'>Movies in time</Link>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </div>
    )
}

export default Navbar