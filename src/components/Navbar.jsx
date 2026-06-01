import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

function Navbar() {
    const { user, login, logout } = useContext(AuthContext);
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
            <Link to="/" className="font-bold text-lg">Movie Watchlist</Link>
            <div className="flex gap-4 text-sm">
                {!user && <Link to={"/login"}>LogIn</Link>}
                {user && <div>
                    <h1>Welcome {user.name}</h1>
                    <button onClick={logout}>logOut</button>
                </div>
                }
            </div>
        </nav>
    )
}

export default Navbar
