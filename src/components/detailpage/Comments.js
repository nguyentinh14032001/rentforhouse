import React, { useContext, useEffect, useState } from "react";
import Comment from "./Comment";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import comments from "../../assets/data/comments.json";
import * as yup from "yup";
import { DetailContext } from "pages/DetailPage";
import { v4 as uuidv4 } from "uuid";

const Comments = () => {
  const uuid = uuidv4();
  const value = useContext(DetailContext);
  const { newId } = value;
  const [comment, setComment] = useState([]);
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
    setComment((prev) => [
      ...prev,
      {
        id: uuid,
        houseId: newId,
        comment: data.comment,
        userName: "Người Demo",
      },
    ]);
    setFocus("comment");
    reset({ comment: "" });
    // localStorage.setItem(
    //   uuid,
    //   JSON.stringify({ content: data.comment, houseId: newId })
    // );
    // const keys = Object.keys(localStorage);
    // keys.map((item) => setComment((prev) => [...prev, { item }]));
  };
  // useEffect(() => {
  //   const keys = Object.keys(localStorage);
  //   keys.map((item) => setComment((prev) => [...prev, { item }]));
  //   console.log(keys, comment);
  // }, []);
  const newData = comments.filter((item) => item.houseId == +newId);
  return (
    <>
      <div className="container flex flex-col">
        <div className="flex w-fit items-center justify-center bg-black py-2 px-3">
          <h1 className="font-bold text-white">Comments</h1>
        </div>
        <div className="flex flex-col bg-[#D9D9D9] p-8">
          {newData &&
            newData.map((item) => <Comment key={item.id} item={item} />)}
          {comment &&
            comment.map((item) => <Comment key={item.id} item={item} />)}
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
