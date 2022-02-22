import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";
import { useLocation, useParams } from "react-router-dom";

const GET_MOVIE_DETAIL = gql`
  query getMovie($id: ID!) {
    Movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
    Suggestions(id: $id) {
      title
    }
  }
`;

function Detail() {
  const { id } = useParams();
  const { state: title } = useLocation();
  const { loading, data } = useQuery(GET_MOVIE_DETAIL, {
    variables: { id },
  });

  return (
    <div>
      {loading ? (
        <>
          <h1>{title}</h1>
          <h1>loading...</h1>
        </>
      ) : (
        <div>
          {/* <h5>{data.Movie.title}</h5> */}
          {/* <h5>{data.Movie.id}</h5>
          <h5>{data.Movie.description_intro}</h5>
          <h5>{data.Movie.medium_cover_image}</h5> */}
          <h2>Suggestions</h2>
          {data.Suggestions.map((movie) => (
            <h5>{movie.title}</h5>
          ))}
        </div>
      )}
    </div>
  );
}

export default Detail;
