import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import { DetailContext } from "pages/DetailPage";
import Comment from "./Comment";

const Comments = () => {
  const uuid = uuidv4();
  const value = useContext(DetailContext);
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const { houses } = value;

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
        // houseId: newId,
        comment: data.comment,
        userName: "Người Demo",
      },
    ]);
    setFocus("comment");
    reset({ comment: "" });
  };

  useEffect(() => {
    const fetchApi = async () => {
      try {
        await axios
          .get("http://localhost:8086/api/comments/house/2", {
            headers: {
              Authorization: userData.access_token,
            },
          })
          .then((res) => {
            setComment(res.data.data.comment);
          });
      } catch (error) {}
    };
    fetchApi();
  }, []);

  console.log(comment);

  return (
    <>
      <div className="container flex flex-col">
        <div className="flex w-fit items-center justify-center bg-black py-2 px-3">
          <h1 className="font-bold text-white">Comments</h1>
        </div>
        <div className="flex flex-col bg-[#D9D9D9] p-8">
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
