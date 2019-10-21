import React from "react";
import Home from "../components/home.js";
import { useQuery } from "@apollo/react-hooks";
import { RESOURCES } from "../queries/resources";

function HomeContainer() {
  const { loading, error, data } = useQuery(RESOURCES);

  return <Home loading={loading} error={error} data={data} />;
}

export default HomeContainer;
