import { Link } from "react-router-dom";

const Container = styled.article`
  height: 300px;
  width: min-content;
  background-color: gainsboro;
  border: 2px solid grey;
  img {
    height: 80%;
  }
`;

function Movie({ cover, id, title }) {
  return (
    <Container>
      <Link to={`/${id}`} state={title}>
        <img src={cover} alt="" />
        <h2>{title}</h2>
      </Link>
    </Container>
  );
}

export default Movie;
