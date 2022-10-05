import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const DetailHouse = lazy(() => import("./pages/DetailHouse"));
function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
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
