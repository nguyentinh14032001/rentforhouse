import { useContext } from "react";

import { DetailContext } from "pages/DetailPage";

import "assets/sass/detailpage/SellerProfile.scss";

function SellerProfile() {
  const value = useContext(DetailContext);
  const { house } = value;
  return (
    <div className="seller-profile mx-auto w-fit">
      <img src={house?.user?.image} alt="" />
      <h1 className="capitalize">
        {house?.user?.lastName}
        {house?.user?.firstName}
      </h1>
      <div className="flex flex-col items-start font-bold">
        <p>{house?.user?.email}</p>
        <p>{house?.user?.phone}</p>
      </div>
    </div> /* End fragment */
  );
}

export default SellerProfile;
