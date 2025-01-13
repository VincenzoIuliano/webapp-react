import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    
    const { id, title, director, genre, release_year, abstract, image} = movie;
    
    return (
      <>
        <div className="border rounded-top w-50 col-4">
          <figure>
            <img src={image} alt="" className=" img-thumbnail" />
          </figure>
          <div className="p-3">
            <div className="fw-bold fst-italic">{title}</div>
            <div className="fst-italic">{genre}</div>
            <div className="fst-italic">{director}</div>
            <Link
              className="bg-warning rounded inline-block"
              to={`/movies/${id}`}
            >
              Leggi di più
            </Link>
          </div>
        </div>
      </>
    );
}



export default MovieCard
