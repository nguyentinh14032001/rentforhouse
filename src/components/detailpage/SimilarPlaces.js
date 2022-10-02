import React from "react";
import SimilarPlacesItem from "./SimilarPlacesItem";

const SimilarPlaces = () => {
  return (
    <>
      <div className="container my-[10vh] grid grid-cols-3 gap-4">
        <div className="col-span-3">
          <h1 className="text-[24px] font-bold">Nơi ở liên quan</h1>
        </div>
        <SimilarPlacesItem />
        <SimilarPlacesItem />
        <SimilarPlacesItem />
      </div>
    </>
  );
};

export default SimilarPlaces;
