import SellerProfile from "./rightnavbar/SellerProfile";
import SearchBar from "./rightnavbar/SearchBar";
import HighVote from "./rightnavbar/HighVote";
import LatestArticle from "./rightnavbar/LatestArticle";
import FollowUs from "./rightnavbar/FollowUs";

function RightNavbar() {
  return (
    <div className="col-4">
      <div className="mt-[50px]">
        <SellerProfile />
        {/* <SearchBar /> */}
        <HighVote />
        <LatestArticle />
        <FollowUs />
      </div>
    </div>
  );
}

export default RightNavbar;
