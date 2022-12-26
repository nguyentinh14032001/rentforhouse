import { Link } from "react-router-dom";

function Discover() {
  return (
    <>
      <div className="flex w-full justify-center px-[66px]">
        <div className="flex w-[90%] items-center justify-between bg-[#ff5a3c] p-10 text-white">
          <div className="text-[24px]">
            <h1>Bạn muốn tìm một nơi ở mới ?</h1>
            <p className="m-0">
              Chúng tôi sẽ giúp bạn tìm một ngôi nhà trong mơ của bạn
            </p>
          </div>
          <div>
            <Link
              to="/discover"
              className="border-0 bg-white py-[10px] px-5 text-center text-[12px] font-bold text-black hover:bg-black hover:text-white"
            >
              Bắt đầu khám phá
            </Link>
          </div>
        </div>
      </div>
    </>
    /* End fragment */
  );
}
export default Discover;
