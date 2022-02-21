import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://apollo-movie-server.herokuapp.com/",
});

export default client;
