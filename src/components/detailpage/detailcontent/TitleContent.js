import React, { useContext } from "react";

import { DetailContext } from "pages/DetailPage";
import "assets/sass/detailpage/TitleContent.scss";

function TitleContent() {
  const value = useContext(DetailContext);
  const { house } = value;

  return (
    <div className="col-12 title-content">
      <h1 className="capitalize">{house?.name}</h1>
      <div className="address mt-4">
        <i className="fa-solid fa-location-dot" />
        <small>{house?.address}</small>
      </div>
      <p className="mt-4 text-[24px]">
        {house?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND
      </p>
    </div>
    /* End col title-content*/
  );
}

export default TitleContent;
