import React from "react";

import Navbar from "layout/Navbar";
import BackgroundLayout from "layout/BackgroundLayout";
import PostHouse from "components/postsellhouse/PostHouse";
import Footer from "layout/Footer";

const PostSellHouse = () => {
  return (
    <div>
      <Navbar />
      <BackgroundLayout>
        <PostHouse />
      </BackgroundLayout>
      <Footer />
    </div>
  );
};

export default PostSellHouse;
