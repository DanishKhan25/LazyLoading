import React, { lazy, Suspense } from "react";
import "./App.css";

const Home = React.lazy(() => import("./Components/Home"));
function App() {
  return (
    <>
      <h1 className="main-heading">List of Profiles</h1>
      <Suspense fallback={<h4>Loding list of profiles....</h4>}>
        <Home />;
      </Suspense>
    </>
  );
}

export default App;
