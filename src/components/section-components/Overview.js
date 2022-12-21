import a from "assets/image-custom/1.png";
import b from "assets/image-custom/2.png";
import c from "assets/image-custom/3.png";

import "assets/sass/section/Overview.scss";

function Overview() {
  return (
    <div>
      <div className="container flex h-[90vh] items-center pl-[55px]">
        <div className="row w-full">
          <div className="col-5 relative -z-[100] mt-[3vh] h-full">
            <div className="absolute left-[15%] z-[1] h-[50vh] w-[70%]">
              <img src={c} alt="top" className="h-full w-full" />
            </div>
            <div className="active absolute left-0 -z-[1] mt-[10%] h-[50vh] w-[70%]">
              <img src={b} alt="bottom" className="h-full w-full" />
            </div>
          </div>
          <div className="col-7">
            <h1 className="mb-4 text-center text-[30px] font-bold">
              Thông tin về chúng tôi
            </h1>
            <div className="text-[18px] font-[550] tracking-[0.1] text-text-3">
              <p className="mb-2">Không gian sống đáng mơ ước dành cho bạn</p>
              <p className="mb-2">
                Hơn 1000 chỗ ở đã kết nối với chúng tôi từ khắp các phường xã
                trong thành phố Quy Nhơn.
              </p>
              <p className="mb-2">
                Chúng tôi ngày càng hoàn thiện dịch vụ môi giới, truyền thông,
                đầu tư và quản lý bất động sản.
              </p>
            </div>

            <div className="mb-4 flex w-fit flex-col px-2">
              <div className="flex items-baseline gap-2">
                <i className="fa-regular fa-eye font-bold text-[#FF5A3C]"></i>
                <span className="text-[18px] font-bold text-[#FF5A3C]">
                  Tầm nhìn
                </span>
              </div>

              <p className="text-[13px] font-bold">
                Trở thành trang web môi giới bất động sản uy tín nhất Quy Nhơn
              </p>
            </div>

            <div className="mb-4 flex w-fit flex-col px-2">
              <div className="flex items-baseline gap-2">
                <i className="fa-solid fa-bullseye font-bold text-[#FF5A3C]"></i>
                <span className="text-[18px] font-bold text-[#FF5A3C]">
                  Mục tiêu
                </span>
              </div>

              <p className="text-[13px] font-bold">
                Mang đến cho khách hàng các dịch vụ nhà ở với mức giá hợp lý
                nhất.
              </p>
            </div>

            <div className="mb-4 flex w-fit flex-col px-2">
              <div className="flex items-baseline gap-2">
                <i className="fa-solid fa-envelope font-bold text-[#FF5A3C]"></i>
                <span className="text-[18px] font-bold text-[#FF5A3C]">
                  Liên hệ
                </span>
              </div>

              <p className="text-[13px] font-bold">
                supportnhadatquynhon@gmail.com
              </p>
            </div>
          </div>
        </div>
        {/* End row   */}
      </div>
      {/* End container   */}
    </div>
    /* End fragment */
  );
}
export default Overview;
