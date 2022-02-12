import './App.css';
import Movie from './Movie';
import Filter from './Filter';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react";


function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);


  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=11b5bfabe2048a5aed09e468ba2dd1df&language=en-US&page=1"
    );

    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre} />

      <motion.div
        animate = {{y : 100}}
        layout
        className="popular-movies">
        <AnimatePresence>
          {filtered.map(movie => {
            return <Movie key={movie.id} movie={movie} />
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
export default App;
