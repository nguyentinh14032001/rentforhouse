import { Link } from "react-router-dom";
import a from "../../assets/image-custom/1.png";
import b from "../../assets/image-custom/2.png";
import c from "../../assets/image-custom/3.png";

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="grid-col-2 grid">
              <div className="flex flex-col justify-center px-[25%]">
                <p className="mb-[20px] text-[24px] font-bold">
                  Bất động sản Quy Nhơn
                </p>
                <h1 className="text-[50px] font-bold leading-[3.5rem] -tracking-[1px]">
                  Hiện thực hoá <span className="text-[#ff5a3c]">ước mơ</span>{" "}
                  về căn nhà của bạn
                </h1>
                <div className="mb-[40px] border-l-[1px] border-[#000] pl-[30px] text-[14px] text-[#5c727d]">
                  Kênh thông tin tìm nhà ở số 1 Quy Nhơn <br />
                  Website đăng tin cho thuê phòng trọ, nhà bán, nhà cho thuê
                  <br />
                  Chuyên trang bất động sản số 1 Quy Nhơn
                </div>
                <div>
                  <Link
                    to="/discover"
                    className="bg-[#ff5a3c] px-2 py-1 text-white"
                  >
                    See more
                  </Link>
                </div>
              </div>

              <img
                src={a}
                className="col-span-1 col-start-2 h-[500px] w-full"
                alt="carousel1.jpg"
              />
            </div>
          </div>

          <div className="carousel-item">
            <div className="grid-col-2 grid">
              <div className="flex flex-col justify-center px-[25%]">
                <p className="mb-[20px] text-[24px] font-bold">
                  Bất động sản Quy Nhơn
                </p>
                <h1 className="text-[50px] font-bold leading-[3.5rem] -tracking-[1px]">
                  Hiện thực hoá <span className="text-[#ff5a3c]">ước mơ</span>{" "}
                  về căn nhà của bạn
                </h1>
                <div className="mb-[40px] border-l-[1px] border-[#000] pl-[30px] text-[14px] text-[#5c727d]">
                  Kênh thông tin tìm nhà ở số 1 Quy Nhơn <br />
                  Website đăng tin cho thuê phòng trọ, nhà bán, nhà cho thuê
                  <br />
                  Chuyên trang bất động sản số 1 Quy Nhơn
                </div>
                <div>
                  <Link
                    to="/discover"
                    className="bg-[#ff5a3c] px-2 py-1 text-white"
                  >
                    See more
                  </Link>
                </div>
              </div>

              <img
                src={b}
                className="col-span-1 col-start-2 h-[500px] w-full"
                alt="carousel2.jpg"
              />
            </div>
          </div>

          <div className="carousel-item">
            <div className="grid-col-2 grid">
              <div className="flex flex-col justify-center px-[25%]">
                <p className="mb-[20px] text-[24px] font-bold">
                  Bất động sản Quy Nhơn
                </p>
                <h1 className="text-[50px] font-bold leading-[3.5rem] -tracking-[1px]">
                  Hiện thực hoá <span className="text-[#ff5a3c]">ước mơ</span>{" "}
                  về căn nhà của bạn
                </h1>
                <div className="mb-[40px] border-l-[1px] border-[#000] pl-[30px] text-[14px] text-[#5c727d]">
                  Kênh thông tin tìm nhà ở số 1 Quy Nhơn <br />
                  Website đăng tin cho thuê phòng trọ, nhà bán, nhà cho thuê
                  <br />
                  Chuyên trang bất động sản số 1 Quy Nhơn
                </div>
                <div>
                  <Link
                    to="/discover"
                    className="bg-[#ff5a3c] px-2 py-1 text-white"
                  >
                    See more
                  </Link>
                </div>
              </div>

              <img
                src={c}
                className="col-span-1 col-start-2 h-[500px] w-full"
                alt="carousel1.jpg"
              />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev top-[50%] h-fit w-fit"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-black"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next top-[50%] h-fit w-fit"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-black"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    /* End fragment */
  );
}
export default Carousel;
