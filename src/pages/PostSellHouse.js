import React, { useEffect, useState } from "react";

import Header from "layout/Header";
import PostHouse from "components/postsellhouse/PostHouse";

const PostSellHouse = () => {
  return (
    <div>
      <Header></Header>
      <div className="mx-[15vw]">
        <PostHouse></PostHouse>
      </div>
    </div>
  );
};

export default PostSellHouse;
