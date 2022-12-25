import React from "react";

const SellHouseImage = ({ handleChange, image, setImage }) => {
  return (
    <>
      <div className="mb-10 flex h-[200px] w-full rounded-full">
        <label
          className={`flex h-full w-full cursor-pointer rounded-lg border border-dashed bg-transparent`}
        >
          <input
            type="file"
            name="images"
            onChange={handleChange}
            multiple
            accept="image/png , image/jpeg, image/webp"
            className="hidden"
          />

          {image.length == 0 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto my-auto h-6 w-6 w-fit"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          )}
          {image &&
            image.map((url, index) => (
              <div key={index} className="w-[20%]">
                <img
                  src={url}
                  className="h-full w-full object-cover px-[2px]"
                  alt=""
                />
              </div>
            ))}
        </label>
      </div>
    </>
  );
};

export default SellHouseImage;
