import axios from "axios";
import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../../components/ReviewCard";

function MoviePage() {

    const {id} = useParams();
    const [movie, setMovie] = useState(null)

    const fetchMovie = () => {
        axios.get(`http://localhost:3000/api/movies/${id}`)
        .then((response) =>{
            setMovie(response.data)
        })
        .catch((err) => {
            console.error(err)
        })
    };

    useEffect(() => {
        fetchMovie();
    },[id]);

    return (
        movie ? (<>
            <section>
                <div>
                    <h1>{movie?.title}</h1>
                </div>
                <div>
                    <h2>{movie?.director}</h2>
                </div>
            </section>
            <section>
                <div>
                    <h2>{movie?.abstract}</h2>
                </div>
            </section>
            { /* RECENSIONI  */ }
            
               <ul className="container">
                    {movie.reviews.map(review => (
                        <ReviewCard review={review} key={review.id} />
                    ))  }
               </ul> 
             
        </>) : <div>Nessun film presente in archivio</div>
    )
}

export default MoviePage;