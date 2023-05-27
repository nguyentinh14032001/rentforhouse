import React from "react";

const HouseViewAuthor = () => {
  return (
    <div className="mb-9 flex items-center gap-x-5">
      <img
        src={
          "https://images.unsplash.com/photo-1682686580186-b55d2a91053c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80"
        }
        className="h-[60px] w-[60px] rounded-full object-cover"
        alt=""
      />
      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-x-4">
          <h3 className="text-lg font-medium">Saiful Islam</h3>
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
          </div>
        </div>
        <div className="text-text3 flex items-center gap-x-3 text-sm">
          <strong className="text-primary">02 Campaign</strong>
          <span className="bg-text3 block h-[6px] w-[6px] rounded-full"></span>
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};

export default HouseViewAuthor;
