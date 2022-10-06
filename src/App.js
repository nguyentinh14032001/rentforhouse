import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
<<<<<<< HEAD
const HomePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const DetailHouse = lazy(() => import("./pages/DetailHouse"));
=======
const DashBoardPage = lazy(() => import("./pages/DashBoardPage"));
const DetailPage = lazy(() => import("./pages/DetailPage"));
>>>>>>> master
function App() {
  return (
    <Suspense>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<HomePage></HomePage>}></Route>
=======
        <Route path="/" element={<DashBoardPage></DashBoardPage>}></Route>
        <Route path="/detail" element={<DetailPage></DetailPage>}></Route>
>>>>>>> master
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="/slug" element={<DetailHouse></DetailHouse>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
