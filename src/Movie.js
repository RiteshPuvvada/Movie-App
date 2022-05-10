import { motion } from "framer-motion";

function Movie({ movie }) {
    return (
        <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            layout>
            <h2>{movie.title}</h2>
            <img src={
                "https://image.tmdb.org/t/p/w500" + movie.poster_path
            } alt="" />
        </motion.div>
    )
}


//{this.popular.results[random].backdrop_path

export default Movie;