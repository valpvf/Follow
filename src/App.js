import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// import  { Home, Tweets } from './pages/index'

const Home = lazy(() => import("./pages/Home"));
const Tweets = lazy(() => import("./pages/Tweets"));

function App() {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
