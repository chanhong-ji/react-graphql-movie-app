import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Outlet } from "react-router-dom";
import { gql } from "apollo-boost";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
  {
    Movies {
      id
      title
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Loader = styled.h2``;

function Home() {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        data.Movies.map((movie) => (
          <Movie
            key={movie.id}
            cover={movie.medium_cover_image}
            id={movie.id}
            title={movie.title}
          />
        ))
      )}
      <Outlet />
    </Container>
  );
}

export default Home;
