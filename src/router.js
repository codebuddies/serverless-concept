import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/home";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

// TODO: Move uri value to config file
const client = new ApolloClient({
  uri: "https://hardcore-haibt-da9a6b.netlify.com/.netlify/functions/graphql"
});

const Routes = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/">
              <HomeContainer />
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
};

export default Routes;
