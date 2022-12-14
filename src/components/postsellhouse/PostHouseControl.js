import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import Select from "react-select";

const PostHouseControl = ({ data, register, setValue, handleImage, image }) => {
  // const [error, setError] = useState([]);
  // const [errorContain, setErrorContain] = useState();

  const options = [
    { value: "nha_cho_thue", label: "nhà cho thuê" },
    { value: "nha_ban", label: "nhà bán" },
    { value: "phong_tro", label: "phòng trọ" },
  ];

  const handleChange = (e) => {
    setValue("typeHouses", [e.value]);
  };
  // {
  //   errors && Object.keys(errors).map((e) => e == data?.name);
  // }
  // useEffect(() => {
  //   setError(Object.entries(errors));
  // }, [errors]);
  return (
    <>
      {data && <h1 className="font-bold capitalize">{data?.title}</h1>}
      {data && data?.type == "input" ? (
        <input
          className="w-full resize-none py-4"
          type="text"
          {...register(data?.name)}
          placeholder={data?.placeholder}
        ></input>
      ) : data?.type == "textarea" ? (
        <textarea
          className="w-full resize-none py-4"
          type="text"
          {...register(data?.name)}
          placeholder={data?.placeholder}
        ></textarea>
      ) : data?.type == "select" ? (
        <Select
          options={options}
          onChange={handleChange}
          defaultValue={{ value: "Chọn loại nhà", label: "Chọn loại nhà" }}
          className="py-4"
        />
      ) : (
        <>
          <div className="relative cursor-pointer overflow-hidden rounded-lg p-2 hover:opacity-80">
            <p className="text-white">Chose Images</p>
            <input
              type="file"
              name="file"
              onChange={handleImage}
              className="fileInput "
            />
          </div>
          <div className="flex">
            {image &&
              image.map((url) => (
                <img
                  src={url}
                  alt=""
                  className="h-[200px] w-[200px] border-4 border-black object-cover"
                />
              ))}
          </div>
        </>
      )}
      {/* {error && <p className="errors">{errors?.error?.message}</p>} */}
    </>
  );
};

export default PostHouseControl;
