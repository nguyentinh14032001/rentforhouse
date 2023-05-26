import React from "react";
import Modal from "react-modal";
// import CategoryAddNew from "modules/dashboard/manage/role/RoleAddNew";
import CategoryManage from "modules/dashboard/manage/category/CategoryManage";
import CategoryUpdate from "modules/dashboard/manage/category/CategoryUpdate";
import HouseAddNew from "modules/house/part/HouseAddNew";
import DashboardPage from "pages/DashboardPage";
import NotFoundPage from "pages/NotFoundPage";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./modules/dashboard/DashboardLayout";
import HouseManage from "./modules/dashboard/manage/house/HouseManage";
import UserAddNew from "./modules/dashboard/manage/user/UserAddNew";
import UserManage from "./modules/dashboard/manage/user/UserManage";
import UserUpdate from "./modules/dashboard/manage/user/UserUpdate";
import HouseUpdate from "./modules/house/part/HouseUpdate";
import HouseView from "./modules/house/part/HouseView";
import HouseFeature from "./modules/house/part/HouseFeature";
// import RoleManage from "modules/dashboard/manage/role/RoleManage";
// import RoleAddNew from "modules/dashboard/manage/role/RoleAddNew";
import CheckHouse from "modules/dashboard/manage/checkhouse/CheckHouseManage";
const Main = lazy(() => import("./pages/Main"));
const PostSellHouse = lazy(() => import("./pages/PostSellHouse"));
const DiscoverPage = lazy(() => import("./pages/DiscoverPage"));
const DetailPage = lazy(() => import("./pages/DetailPage"));
const YourHouse = lazy(() => import("./pages/YourHousePage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));

function App() {
  const customStyles = {
    content: {},
  };
  Modal.setAppElement("#root");
  Modal.defaultStyles = {};

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/home" element={<Main></Main>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        <Route path="/discover" element={<DiscoverPage></DiscoverPage>}></Route>
        <Route path="/your-house" element={<YourHouse></YourHouse>}></Route>
        <Route
          path="/sell-house"
          element={<PostSellHouse></PostSellHouse>}
        ></Route>
        <Route
          path="/sell-house/:id"
          element={<PostSellHouse></PostSellHouse>}
        ></Route>
        <Route path="/detail/:id" element={<DetailPage></DetailPage>}></Route>
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>

        <Route
          path="/manage/update-house"
          element={<HouseUpdate></HouseUpdate>}
        ></Route>
        <Route path="/houseview" element={<HouseView></HouseView>}></Route>
        <Route
          path="/housefeature"
          element={<HouseFeature></HouseFeature>}
        ></Route>
        <Route element={<DashboardLayout></DashboardLayout>}>
          <Route
            path="/manage/dashboard"
            element={<DashboardPage></DashboardPage>}
          ></Route>
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
            path="/manage/add-house"
            element={<HouseAddNew></HouseAddNew>}
          ></Route>
          <Route
            path="/manage/category"
            element={<CategoryManage></CategoryManage>}
          ></Route>
          {/* <Route
            path="/manage/add-category"
            element={<CategoryAddNew></CategoryAddNew>}
          ></Route> */}
          <Route
            path="/manage/update-category"
            element={<CategoryUpdate></CategoryUpdate>}
          ></Route>
          {/* <Route
            path="/manage/role"
            element={<RoleManage></RoleManage>}
          ></Route> */}
          {/* <Route
            path="/manage/add-role"
            element={<RoleAddNew></RoleAddNew>}
          ></Route>
          <Route
            path="/manage/update-role"
            element={<RoleAddNew></RoleAddNew>}
          ></Route> */}
          <Route
            path="/manage/checkhouse"
            element={<CheckHouse></CheckHouse>}
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
