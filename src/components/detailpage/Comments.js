import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import { DetailContext } from "pages/DetailPage";
import Comment from "./Comment";

const Comments = ({ idHouse }) => {
  // const value = useContext(DetailContext);
  // const { houses } = value;
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [comment, setComment] = useState([]);
  const [data, setData] = useState();
  // const [user, setUser] = useState();
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

  const onSubmit = (data) => {
    setData(data);
    setFocus("comment");
    reset({ comment: "" });
  };

  // {
  //   params: {
  //     houseId: idHouse,
  //     userId: userData?.id,
  //     content: data.comment,
  //   },
  // },

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   const userData = JSON.parse(user);
  //   setUser(userData);
  // }, []);

  // useEffect(() => {
  //   const postApi = async () => {
  //     try {
  //       await axios
  //         .post(
  //           `http://localhost:8086/api/comments?content=${data.comment}&houseId=${idHouse}&userId=${user?.id}`,
  //           {
  //             headers: {
  //               Authorization: user.access_token,
  //             },
  //           }
  //         )
  //         .then((res) => {
  //           console.log(res);
  //         });
  //     } catch (error) {}
  //   };
  //   postApi();
  // }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios({
          method: "post",
          url: `http://localhost:8086/api/comments?content=${data.comment}&houseId=${idHouse}&userId=${userData?.id}`,
          headers: {
            Authorization: userData.access_token,
          },
        })
          .then(function (response) {
            setComment((prev) => [...prev, response.data.data]);
          })
          .catch(function (response) {
            console.log(response);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [data]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        await axios
          .get(`http://localhost:8086/api/comments/house/${idHouse}`)
          .then((res) => {
            setComment(res.data.data.comment);
          });
      } catch (error) {}
    };
    fetchApi();
  }, []);

  return (
    <>
      <div className="container flex flex-col">
        <div className="flex w-fit items-center justify-center bg-black py-2 px-3">
          <h1 className="font-bold text-white">Comments</h1>
        </div>
        <div className="flex flex-col bg-[#D9D9D9] p-8">
          {comment &&
            comment.map((item) => <Comment key={item.id} comment={item} />)}
          {user && (
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
          )}

          {/* End form post-reviews*/}
        </div>
      </div>
    </>
  );
};

export default Comments;
