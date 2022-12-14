import CategoryAddNew from "modules/dashboard/manage/category/CategoryAddNew";
import CategoryManage from "modules/dashboard/manage/category/CategoryManage";
import CategoryUpdate from "modules/dashboard/manage/category/CategoryUpdate";
import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./modules/dashboard/DashboardLayout";
import HouseManage from "./modules/dashboard/manage/house/HouseManage";
import UserAddNew from "./modules/dashboard/manage/user/UserAddNew";
import UserManage from "./modules/dashboard/manage/user/UserManage";
import UserUpdate from "./modules/dashboard/manage/user/UserUpdate";
import HouseUpdate from "./modules/house/part/HouseUpdate";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
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
        <Route path="/detail/:id" element={<DetailPage></DetailPage>}></Route>
        <Route path="/discover" element={<DiscoverPage></DiscoverPage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/your-house" element={<YourHouse></YourHouse>}></Route>

        <Route
          path="/manage/update-house"
          element={<HouseUpdate></HouseUpdate>}
        ></Route>
        <Route
          path="/sell-house"
          element={<PostSellHouse></PostSellHouse>}
        ></Route>
        <Route element={<DashboardLayout></DashboardLayout>}>
          <Route
            path="/manage/user"
            element={<UserManage></UserManage>}
          ></Route>
          <Route
            path="/manage/update-user"
            element={<UserUpdate></UserUpdate>}
          ></Route>
          <Route
            path="/manage/add-user"
            element={<UserAddNew></UserAddNew>}
          ></Route>
          <Route
            path="/manage/house"
            element={<HouseManage></HouseManage>}
          ></Route>
          <Route
            path="/manage/category"
            element={<CategoryManage></CategoryManage>}
          ></Route>
          <Route
            path="/manage/add-category"
            element={<CategoryAddNew></CategoryAddNew>}
          ></Route>
          <Route
            path="/manage/update-category"
            element={<CategoryUpdate></CategoryUpdate>}
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
