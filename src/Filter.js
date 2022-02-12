import './App.css'
import { useEffect } from "react";


function Filter({setActiveGenre, activeGenre, setFiltered, popular}){

    useEffect(() => {
        if (activeGenre === 0){
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie) => 
        movie.genre_ids.includes(activeGenre)
        );
        setFiltered(filtered);
    },[activeGenre]);

    return(
        <div >
            <button className={activeGenre === 0 ? "active" : ""}  
            className='bn30' 
            onClick={() => setActiveGenre(0)}>All</button>

             <button className={activeGenre === 28 ? "active" : ""}  
            className='bn30' 
            onClick={() => setActiveGenre(28)}>Action</button>

            <button className={activeGenre === 12 ? "active" : ""}  
            className='bn30' 
            onClick={() => setActiveGenre(12)}>Adventure</button>

            <button className={activeGenre === 16 ? "active" : ""}  
            className='bn30' 
            onClick={() => setActiveGenre(16)}>Animation</button>

            <button className={activeGenre === 35 ? "active" : ""}  
            className='bn30' 
            onClick={() => setActiveGenre(35)}>Comedy</button>

            <button className={activeGenre === 80 ? "active" : ""}  
            className='bn30' 
            onClick={() => setActiveGenre(80)}>Crime</button>
            
            <button className={activeGenre === 18 ? "active" : ""}  
            className='bn30' 
            onClick={() => setActiveGenre(18)}>Drama</button>
            
            <button className={activeGenre === 14 ? "active" : ""}  
            className='bn30' 
            onClick={() => setActiveGenre(14)}>Fantasy</button>

            <button className={activeGenre === 27 ? "active" : ""}  
            className='bn30' 
            onClick={() => setActiveGenre(27)}>Horror</button>

            <button className={activeGenre === 9648 ? "active" : ""}  
            className='bn30' 
            onClick={() => setActiveGenre(9648)}>Mystery</button>

            <button className={activeGenre === 878 ? "active" : ""}  
            className='bn30' 
            onClick={() => setActiveGenre(878)}>Science Fiction</button>

            <button className={activeGenre === 53 ? "active" : ""}  
            className='bn30' 
            onClick={() => setActiveGenre(53)}>Thriller</button>
        </div>
    )
}

export default Filter;