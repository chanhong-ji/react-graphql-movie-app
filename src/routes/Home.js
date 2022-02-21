import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Outlet } from "react-router-dom";
import { gql } from "apollo-boost";

const GET_MOVIES = gql`
  {
    Movies {
      id
      title
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_MOVIES);
  loading || console.log(data);
  return (
    <div>
      <span>Home</span>
      <Outlet />
    </div>
  );
}

export default Home;
