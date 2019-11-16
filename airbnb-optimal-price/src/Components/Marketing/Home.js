import React from 'react';
import {
  Link
} from "react-router-dom";
function Home() {
  return (
    <div >
      <h1>Marketing Page</h1>
      <Link to="/onboarding">Onboarding</Link>
    </div>
  );
}

export default Home;
