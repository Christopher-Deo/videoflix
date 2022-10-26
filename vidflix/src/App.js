import React from "react";
import { useState, useEffect } from "react";
import './app.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";


//API key: aa76bd6b
 
//static variable to hold the api url & key
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=aa76bd6b'
// eslint-disable-next-line
const movie1 = {
    Title: 'Spiderman in Cannes', 
    Year: '2016', 
    imdbID: 'tt5978586', 
    Type: 'movie', 
    Poster: "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL} &s=${title}`)
        const data = await response.json();

        setMovies(data.Search);

    }
    useEffect(() =>{
        searchMovies('Spiderman')
    }, []);
    return(
        <div className="app">
            <img 
            src="./vidflix logo.png"/>
        <div className="search">
            <input 
               placeholder="Search for Movies"
               value={searchTerm}
               onChange={ (e) => setSearchTerm(e.target.value) }
            />
        <img 
            src={SearchIcon}
            alt='search'
            onClick = {() => searchMovies(searchTerm) }
        />
        </div>

        {
        movies?.length > 0
            ?(
            <div className='container'>
                {movies.map((movie) => (
                    <MovieCard movie={movie}/>
                ))}
            </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2> 
                </div>
            )
        }

        

        </div> //end of App div
    );
}

export default App;