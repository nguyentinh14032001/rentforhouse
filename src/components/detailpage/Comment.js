import React from "react";
import cmtAva1 from "../../assets/images/demoAva.jpg";

const Comment = () => {
  return (
    <>
      <div className=" m-8 flex w-full">
        <img src={cmtAva1} alt="" className="mr-4 h-[60px] w-[55px]" />
        <div className="cmt-item relative flex w-[90%] flex-col bg-white p-4">
          <h1 className="font-bold text-[#1359C1]">Nguyên Tính</h1>
          <div className="mx-auto mb-2 h-[1px] w-[100%] bg-black opacity-20"></div>
          <p className="text-sm opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed
            commodi repellendus cum odit dicta. Voluptas natus quisquam placeat
            consequuntur totam asperiores, rerum nesciunt magni repellat sunt
            error vel esse cum dolore explicabo eius. Dicta quasi perspiciatis
            assumenda et, iusto laborum nesciunt minus rerum quidem magnam,
            quisquam omnis voluptas. Cupiditate?
          </p>
          <div className="absolute bottom-[-1.5rem] left-2 flex items-baseline text-[14px]">
            <button className="mr-2">Reply</button>
            <button className="mr-2">Like</button>
            <button className="mr-2">Dislike</button>
            <button className="mr-2 text-[24px] font-bold">...</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
