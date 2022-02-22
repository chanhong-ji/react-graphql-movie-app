import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";
import styled from "styled-components";
import client from "../apollo";

const Container = styled.article`
  height: 300px;
  width: min-content;
  background-color: gainsboro;
  border: 2px solid grey;
  img {
    height: 80%;
  }
`;

const likeMovie = (id, prev) =>
  client.writeQuery({
    query: gql`
      query likeMovie($id: ID!) {
        Movie(id: $id) {
          isLiked @client
        }
      }
    `,
    data: {
      Movie: {
        __typename: "Movie",
        isLiked: !prev,
      },
    },
    variables: {
      id,
    },
  });

const IS_LIKED = gql`
  query isLiked($id: ID!) {
    Movie(id: $id) {
      isLiked @client
    }
  }
`;

function Movie({ cover, id, title }) {
  const { data, loading } = useQuery(IS_LIKED, {
    variables: { id: +id },
  });
  return (
    <Container>
      <Link to={`/${id}`} state={title}>
        <img src={cover} alt="" />
        <h2>{title}</h2>
      </Link>
      <button onClick={() => likeMovie(+id, data?.Movie?.isLiked)}>
        {data?.Movie?.isLiked ? "UnLike" : "like "}
      </button>
    </Container>
  );
}

export default Movie;
