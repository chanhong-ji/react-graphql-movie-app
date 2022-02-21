import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";
import { useParams } from "react-router-dom";

const GET_MOVIE_DETAIL = gql`
  query getMovie($id: ID!) {
    Movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

function Detail() {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE_DETAIL, {
    variables: { id },
  });
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h5>{data.Movie.description_intro}</h5>
          <h5>{data.Movie.id}</h5>
          <h5>{data.Movie.medium_cover_image}</h5>
          <h5>{data.Movie.title}</h5>
        </div>
      )}
    </div>
  );
}

export default Detail;
