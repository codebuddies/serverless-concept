import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/home";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import config from './config'

const client = new ApolloClient({
  uri: config.graphUrl
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
