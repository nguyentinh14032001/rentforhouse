import React from "react";
import logo from "../assets/images/6.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="bg-black p-[30px] text-white">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 flex flex-col justify-center">
            <img src={logo} alt="" className="mb-[20px] h-[100px] w-[170px]" />

            <p className="text-[14px] leading-6 tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              pellentesque blandit lorem placerat vestibulum. Phasellus egestas
              sagittis augue, ac faucibus nisl elementum vel. Donec et nibh
              erat. Suspendisse molestie, orci at porttitor cursus, lorem odio
              pulvinar risus, nec ornare urna nisi id erat
            </p>
          </div>

          <div className="col-span-2 col-start-2 flex justify-between">
            <p>Nội dung</p>
            <p>Dịch vụ</p>
            <p>Chăm sóc khách hàng</p>
          </div>

          <div className="col-span-1 col-start-4">
            <p>Nhận tin tức</p>

            <small className="text-[12px]">
              Đăng ký để nhận được những thông báo mới nhất từ chúng tôi
            </small>

            <div className="mb-3 flex">
              <input
                type="text"
                className="p-2 text-black"
                placeholder="Mail"
              />
              <button className="bg-[#40CA87] px-4 text-white hover:opacity-80">
                <i className="fa-brands fa-telegram text-[20px]" />
              </button>
            </div>

            <p>Phương thức thanh toán</p>
            <img src={logo} alt="" className="h-[40%] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
