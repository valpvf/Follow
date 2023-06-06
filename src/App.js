import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import Home from "./pages/HomePages";
import Tweets from "./pages/TweetsPages";

// const Home = lazy(() => import("./pages/HomePages"));
// const Tweets = lazy(() => import("./pages/TweetsPages"));

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
