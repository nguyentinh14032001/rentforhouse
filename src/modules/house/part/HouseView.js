import React, { Fragment } from "react";
import HouseImage from "./HouseImage";
import CategoryHouse from "./CategoryHouse";
import HouseTitle from "./HouseTitle";
import HouseDesc from "./HouseDesc";
import HouseViewAuthor from "./HouseViewAuthor";
import HouseMeta from "./HouseMeta";
import { Button } from "components/button";
import HouseModal from "./HouseModal";
import HouseSupport from "./HouseSupport";
import HouseMeta2 from "./HouseMeta2";
import Header from "layout/Header";

const HouseView = () => {
  return (
    <Fragment>
      <Header />
      <div className="container pt-3">
        <div className="flex w-full max-w-[1066px] items-start gap-x-10">
          <div className="flex-1">
            <HouseImage className="mb-8 h-[398px]"></HouseImage>
            <div className="flex gap-x-5">
              {Array(4)
                .fill(0)
                .map((item, index) => (
                  <img
                    src="https://source.unsplash.com/random"
                    className="h-[70px] w-[89px] rounded-lg object-cover"
                    alt=""
                  />
                ))}
            </div>
          </div>
          <div className="max-w-[443px] flex-1">
            <CategoryHouse
              text="Architecture"
              className="text-sm"
            ></CategoryHouse>
            <HouseTitle className="mb-4 text-xl font-bold">
              Remake - We Make architecture exhibition
            </HouseTitle>
            <HouseDesc className="mb-6 text-sm">
              Remake - We Make: an exhibition about architecture's social agency
              in the face of urbanisation
            </HouseDesc>
            <HouseViewAuthor></HouseViewAuthor>
            <div className="mb-6 h-[5px] w-full rounded-full bg-[#EFEFEF]">
              <div className="h-full w-2/4 rounded-full bg-primary"></div>
            </div>
            <div className="mb-4 flex items-start justify-between gap-x-5">
              <HouseMeta2 size="big"></HouseMeta2>
              <HouseMeta2 size="big"></HouseMeta2>
              <HouseMeta2 size="big"></HouseMeta2>
            </div>
            <Button className="w-full bg-primary text-white">
              Back this project
            </Button>
          </div>
        </div>
        <div className="mt-[100px] mb-6 flex items-center justify-between border-b border-b-slate-100 bg-white p-5">
          <div className="text-text3 flex items-center gap-x-14 text-sm font-medium">
            <span className="cursor-pointer text-secondary">Campaign</span>
          </div>
          <Button className="bg-primary text-white">Back this project</Button>
        </div>
        <div className="mb-[70px] grid grid-cols-[1.3fr,1fr] gap-x-[124px]">
          <div>
            <h2 className="mb-5 text-lg font-semibold uppercase">Story</h2>
            <div className="w-full bg-white"></div>
          </div>
          <div>
            <HouseSupport></HouseSupport>
            <div className="mb-[60px]"></div>
            <div className="flex flex-col gap-y-[30px]">
              <HouseModal></HouseModal>
              <HouseModal></HouseModal>
              <HouseModal></HouseModal>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HouseView;
