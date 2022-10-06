import React from "react";
import Comment from "./Comment";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Comments = () => {
  const schema = yup
    .object({
      comment: yup
        .string()
        .required("Hãy nhập bình luận.")
        .max(100, "Bình luận không được quá 100 từ"),
    })
    .required();
  const {
    handleSubmit,
    register,
    reset,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="container flex flex-col">
        <div className="flex w-fit items-center justify-center bg-black py-2 px-3">
          <h1 className="font-bold text-white">Comments</h1>
        </div>
        <div className="flex flex-col bg-[#D9D9D9] p-8">
          <Comment />
          <Comment />
          <Comment />
          <form
            className="flex w-full flex-col items-end"
            onSubmit={handleSubmit(onSubmit)}
          >
            <textarea
              className="h-[15vh] w-full resize-none p-4"
              type="text"
              {...register("comment")}
              placeholder="Hãy nhập bình luận ..."
            ></textarea>
            {errors && <p className="errors">{errors?.comment?.message}</p>}

            <button
              type="submit"
              className="mt-4 w-fit rounded-lg bg-[#40CA87] py-2 px-4 font-bold text-white"
            >
              Gửi
            </button>
          </form>
          {/* End form post-reviews*/}
        </div>
      </div>
    </>
  );
};

export default Comments;
