// TODO: import movies from utils/movies.js
// TODO: implement Read - display the list of movies
// TODO: implement Add, Update (toggle watched), and Delete

import { movies } from "../utils/movies.js";

function MoviesPage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Movies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {movies.map((movie) => (
                    <div
                        key={movie.title}
                        className="bg-gray-900 border border-gray-800 rounded-2xl p-5 flex flex-col gap-3 hover:border-gray-600 transition-colors duration-200"
                    >
                        <div className="flex items-start justify-between gap-2">
                            <h2 className="text-white font-semibold text-lg leading-tight">
                                {movie.title}
                            </h2>
                            <span
                                className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${movie.watched
                                    ? "bg-green-900 text-green-300"
                                    : "bg-gray-800 text-gray-400"
                                    }`}
                            >
                                {movie.watched ? "✓ Watched" : "Unwatched"}
                            </span>
                        </div>

                        <div className="flex flex-col gap-1.5 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-600">Director</span>
                                <span className="text-gray-300">{movie.director}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-600">Genre</span>
                                <span className="bg-gray-800 text-gray-300 text-xs px-2 py-0.5 rounded-md">
                                    {movie.genre}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MoviesPage
