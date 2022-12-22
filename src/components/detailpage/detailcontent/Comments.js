import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import Comment from "./Comment";
import { baseURL } from "api/axios";
import { DetailContext } from "pages/DetailPage";

const Comments = () => {
  const value = useContext(DetailContext);
  const { id } = value;
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);

  const [comment, setComment] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const [isEdit, setIsEdit] = useState({ check: false, comment: null });
  const [postData, setPostData] = useState();
  const [editData, setEditData] = useState();

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
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    if (isEdit.check == true) {
      setEditData(data);
    } else {
      setPostData(data);
    }
    setFocus("comment");
    reset({ comment: "" });
  };

  useEffect(() => {
    const fetchApi = async () => {
      try {
        await axios.get(`${baseURL}/api/comments/house/${id}`).then((res) => {
          setComment(res.data.data.comment);
          setIsChange(false);
        });
      } catch (error) {}
    };
    fetchApi();
  }, [isChange == true]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios({
          method: "post",
          url: `${baseURL}/api/comments?content=${postData.comment}&houseId=${id}&userId=${userData?.id}`,
          headers: {
            Authorization: userData.access_token,
          },
        })
          .then(function (response) {
            setIsChange(true);
          })
          .catch(function (response) {
            console.log(response);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postData]);

  useEffect(() => {
    const putData = async () => {
      try {
        await axios({
          method: "put",
          url: `${baseURL}/api/comments?content=${editData.comment}&houseId=${id}&id=${isEdit?.comment?.id}&userId=${isEdit?.comment?.userId}`,
          headers: {
            Authorization: userData.access_token,
          },
        })
          .then(function (response) {
            setIsChange(true);
            setIsEdit({ check: false, comment: null });
          })
          .catch(function (response) {
            console.log(response);
          });
      } catch (error) {
        console.log(error);
      }
    };
    putData();
  }, [editData]);

  return (
    <>
      <div className="flex flex-col">
        {isEdit?.check == true && <div>{isEdit.comment.id}</div>}
        <div className="flex w-fit items-center justify-center bg-black py-2 px-3">
          <h1 className="font-bold text-white">Comments</h1>
        </div>
        <div className="flex flex-col bg-[#D9D9D9] p-8">
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
          {comment &&
            comment.map((item) => (
              <Comment
                key={item.id}
                comment={item}
                setIsChange={setIsChange}
                setIsEdit={setIsEdit}
                setValue={setValue}
              />
            ))}

          {/* End form post-reviews*/}
        </div>
      </div>
    </>
  );
};

export default Comments;
