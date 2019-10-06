import React from "react";
import Home from "../components/home.js";
import { useQuery } from "@apollo/react-hooks";
import { EXCHANGE_RATES } from "../queries/foo";

function HomeContainer() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  return <Home loading={loading} error={error} data={data} />;
}

export default HomeContainer;
