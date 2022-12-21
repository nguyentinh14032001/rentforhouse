import { useEffect, useState } from "react";

import Header from "layout/Header";
import Carousel from "components/section-components/Carousel";
import Overview from "components/section-components/Overview";
import Services from "components/section-components/Services";
import PopularHouses from "modules/homepage/PopularHouses";
import News from "components/section-components/News";
import Footer from "layout/Footer";
import Discover from "layout/Discover";
// import Discover from "./global-components/Discover";

function Main() {
  const [checkmain, setChekmain] = useState(false);
  useEffect(() => {
    setChekmain(true);
  }, [checkmain]);
  return (
    <div className="Main">
      <Header main={checkmain} />
      <Carousel />
      <Overview />
      <Services />
      <PopularHouses />
      <News />
      <Discover />
      <Footer />
    </div>
  );
}
export default Main;
