import React from "react";
import "./home.css";

function Home(props) {
  const { loading, error, data } = props;
  return (
    <div className="home">
      <header className="home-header">
        <img
          src="https://codebuddies.org/images/logo.svg"
          className="home-logo"
          alt="logo"
        />

        {loading ? <div>Loading Data from backend</div> : null}
        {error ? <div>Error loading data</div> : null}

        {data && data.rates && data.rates.map((r, i) => (
          <div key={i}>
            {r.currency} : {r.rate}USD$
          </div>
        ))}
      </header>
    </div>
  );
}

export default Home;
