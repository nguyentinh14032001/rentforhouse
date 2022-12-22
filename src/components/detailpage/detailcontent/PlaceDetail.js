import React, { useContext } from "react";
import { DetailContext } from "pages/DetailPage";

import "assets/sass/detailpage/PlaceDetail.scss";

function PlaceDetail() {
  const value = useContext(DetailContext);
  const { house } = value;

  return (
    <div className="col-12 place-detail">
      <h1>Chi tiết nơi ở</h1>
      <div className="detail">
        <div className="row">
          <div className="col-3">
            <p>Địa chỉ :</p>
          </div>
          <div className="col-9">
            <small>{house?.address}</small>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <p>Giá cả :</p>
          </div>
          <div className="col-9">
            <small>{house?.price} / tháng</small>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <p>Diện tích :</p>
          </div>
          <div className="col-9">
            <small>{house?.area}</small>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <p>Tiện nghi :</p>
          </div>
          <div className="col-9">
            <small>{house?.detailsumary}</small>
          </div>
        </div>
      </div>
      {/* End detail*/}
    </div>
    /* End col place-detail*/
  );
}

export default PlaceDetail;
