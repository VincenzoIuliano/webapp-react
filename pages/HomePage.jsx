import { useContext, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import GlobalContext from "../src/contexts/globalcontext";

// const movie = {
//     "id": 1,
//     "title": "Inception",
//     "director": "Christopher Nolan",
//     "genre": "Science Fiction",
//     "release_year": 2010,
//     "abstract": "A skilled thief is given a chance at redemption if he can successfully perform inception.",
//     "image": "http://localhost:3000/movies_cover/titanic.jpg",
//     "created_at": "2024-11-29T10:40:13.000Z",
//     "updated_at": "2024-11-29T10:40:13.000Z"
// }

function HomePage() {

    const { setIsLoading } = useContext(GlobalContext)

    const [movies,setMovies] = useState([])
    
    function fetchMovies() {
        
        setIsLoading(true)

        axios.get('http://localhost:3000/api/movies')
        .then(response => {
            // console.log(response.data);
            setMovies(response.data)
        })
        .catch(err => {
            console.error(err)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    useEffect( ()=> {
        fetchMovies()
    },[])
   

    return <>
        <section>
            <div className="container">
                <h1>IL PIU GRANDE CATALOGO DI FILM</h1>
            </div>
        </section>
        <section>
            <div className="container">
                <h2>ECCO L'ELENCO DEI NOSTRI FILM</h2>
            </div>
        </section>
        <section className="container">
            <div className="row g-4">
                <div className="col-4">
                    {
                        movies.map(movie => {
                            return <MovieCard key={movie.id} movie={movie}></MovieCard>
                        })
                    }
                </div>
            </div>
        </section>
    </>
}

export default HomePage;