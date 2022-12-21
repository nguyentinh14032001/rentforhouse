import React, { useContext } from "react";
import { DetailContext } from "pages/DetailPage";
import "assets/sass/detailpage/Description.scss";

function Description() {
  const value = useContext(DetailContext);
  return (
    <div className="col-12 description">
      <h1>Mô tả</h1>
      <p>{value.data.description}</p>
    </div>
    /* End col description*/
  );
}

export default Description;
