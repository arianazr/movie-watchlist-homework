import { useState } from "react";
import { movies as prevMovies } from "../utils/movies";

function MoviesPage() {
    const [movies, setMovies] = useState(prevMovies);
    const [form, setForm] = useState({ title: "", director: "", genre: "", watched: false });

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    }

    function handleSubmit() {
        if (!form.title.trim()) return;
        setMovies((prev) => [...prev, form]);
        setForm({ title: "", director: "", genre: "", watched: false });
    }

    return (
        <div className="min-h-screen bg-gray-950 p-8">
            <h1 className="text-3xl font-bold text-white mb-8 tracking-tight">🎬 Movie Watchlist</h1>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {movies.map((movie, i) => (
                    <div onClick={() => {
                        movie.watched = !movie.watched;
                        setMovies((prev) => [...prev]);
                    }} key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 flex flex-col gap-3 hover:border-gray-600 transition-colors duration-200">
                        <div className="flex items-start justify-between gap-2">
                            <h2 className="text-white font-semibold text-lg leading-tight">{movie.title}</h2>
                            <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${movie.watched ? "bg-green-900 text-green-300" : "bg-gray-800 text-gray-400"}`}>
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
                                <span className="bg-gray-800 text-gray-300 text-xs px-2 py-0.5 rounded-md">{movie.genre}</span>
                            </div>
                        </div>
                        <button
                            className="mt-3 self-end text-s text-gray-600 hover:text-red-400 transition-colors duration-200"
                            onClick={() => {
                                setMovies((prev) => prev.filter((_, j) => j !== i));
                            }}>Delete</button>
                    </div>
                ))}
            </div>
            {/* Form */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mt-8 flex flex-col gap-4 max-w-lg">
                <h2 className="text-white font-semibold text-base">Add a movie</h2>
                <div className="grid grid-cols-2 gap-3">
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Title"
                        className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2 outline-none border border-gray-700 focus:border-gray-500 placeholder-gray-500 col-span-2"
                    />
                    <input
                        name="director"
                        value={form.director}
                        onChange={handleChange}
                        placeholder="Director"
                        className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2 outline-none border border-gray-700 focus:border-gray-500 placeholder-gray-500"
                    />
                    <input
                        name="genre"
                        value={form.genre}
                        onChange={handleChange}
                        placeholder="Genre"
                        className="bg-gray-800 text-white text-sm rounded-lg px-3 py-2 outline-none border border-gray-700 focus:border-gray-500 placeholder-gray-500"
                    />
                </div>
                <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                    <input
                        type="checkbox"
                        name="watched"
                        checked={form.watched}
                        onChange={handleChange}
                        className="accent-green-500"
                    />
                    Already watched
                </label>
                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors w-fit"
                >
                    Add Movie
                </button>
            </div>

        </div>
    );
}
export default MoviesPage
