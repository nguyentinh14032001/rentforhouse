import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const PostSellHouse = lazy(() => import("./pages/PostSellHouse"));
const DetailPage = lazy(() => import("./pages/DetailPage"));
const DiscoverPage = lazy(() => import("./pages/DiscoverPage"));
const YourHouse = lazy(() => import("./pages/YourHousePage"));
function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/detail" element={<DetailPage></DetailPage>}></Route>
        <Route path="/detail/:id" element={<DetailPage></DetailPage>}></Route>
        <Route path="/discover" element={<DiscoverPage></DiscoverPage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/your-house" element={<YourHouse></YourHouse>}></Route>
        <Route
          path="/sell-house"
          element={<PostSellHouse></PostSellHouse>}
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
