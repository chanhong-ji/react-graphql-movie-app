import { Link } from "react-router-dom";

function Movie({ cover, id, title }) {
  return (
    <>
      <Link to={`/${id}`}>
        <img src={cover} alt="" />
        <h2>{title}</h2>
      </Link>
    </>
  );
}

export default Movie;
