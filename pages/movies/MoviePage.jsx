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
        <form className="container mb-3">
          <div className="m-2">
            <label for="Nome">Nome</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Inserisci il tuo nome"
            ></input>
          </div>
          <div className="m-2">
            <label for="Testo">Testo della recensione</label>
            <input
              type="text"
              class="form-control"
              name="text"
              placeholder="Inserisci qui il testo della tua recensione"
            />
          </div>
          <div className="m-2">
            <label for="Voto">Voto della tua recensione: </label>
            <select class="custom-select">
              <option selected>Scegli il voto che vuoi dare alla tua recensione</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <button type="submit" className="rounded p-2 m-2">Invia la tua recensione!</button>
          </div>
        </form>
      </>
    ) : (
      <div>Nessun film presente in archivio</div>
    );
}

export default MoviePage;