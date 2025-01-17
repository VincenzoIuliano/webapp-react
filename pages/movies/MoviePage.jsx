import axios from "axios";
import { useContext, useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../../components/ReviewCard";
import FormReview from "../../components/FormReview";
import GlobalContext from "../../src/contexts/globalcontext";

function MoviePage() {

    const {setIsLoading} = useContext(GlobalContext)

    const {id} = useParams();
    const [movie, setMovie] = useState(null)

    function fetchMovie() {
      {

        setIsLoading(true)

        axios.get(`http://localhost:3000/api/movies/${id}`)
        .then((response) =>{
            setMovie(response.data)
        })
        .catch((err) => {
            console.error(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
    };

    useEffect(() => {
        fetchMovie();
    },[id]);

    return movie ? (
      <>
        <section className="container m-3">
          <div>
            <h1>{movie?.title}</h1>
          </div>
          <div>
            <img
              className="w-50 rounded"
              src={`http://localhost:3000/movies_cover/${movie.image}`}
              alt=""
            />
          </div>
          <div>
            <h2>{movie?.director}</h2>
          </div>
        </section>
        <section className="container m-3">
          <div>
            <h2>{movie?.abstract}</h2>
          </div>
        </section>
        {/* RECENSIONI  */}
        <h3 className="container">RECENSIONI</h3>
        <ul>
          {movie.reviews.map((review) => (
            <ReviewCard review={review} key={review.id} />
          ))}
        </ul>
        <FormReview id={id} />
      </>
    ) : (
      <div>Nessun film presente in archivio</div>
    );
}

export default MoviePage;