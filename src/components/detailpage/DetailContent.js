import { useState } from "react";

import DateComment from "./detailcontent/DateComment";
import TitleContent from "./detailcontent/TitleContent";
import Description from "./detailcontent/Description";
import PlaceDetail from "./detailcontent/PlaceDetail";
import GoogleMap from "./detailcontent/GoogleMap";
import ImageOverview from "./detailcontent/ImageOverview";
import Comments from "./detailcontent/Comments";

import "../../assets/sass/detailpage/DetailContent.scss";

function DetailContent() {
  return (
    <div className="col-8 detailcontent">
      <div className="row">
        <DateComment />
        <TitleContent />
        <Description />
        <PlaceDetail />
        {/* <GoogleMap /> */}
        <ImageOverview />
        <Comments />
      </div>
      {/* End row*/}
    </div>
    /* End col */
  );
}

export default DetailContent;
