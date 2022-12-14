import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";
import Modal from "react-modal";
import Table from "../component/table/Table";
import { ActionView } from "../component/action";
import { customStyles, postStatus, userRole } from "../utils/constants";
import { useSignIn } from "../context/SignInContext";
import { LoadingSpinner } from "../component/loading";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const { user } = useSignIn();
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    const colRef = query(
      collection(db, "posts"),
      where("status", "==", postStatus.PENDING)
    );
    onSnapshot(colRef, (snapshot) => {
      setTotal(snapshot.size);
    });
    onSnapshot(colRef, (snapshot) => {
      if (snapshot.docs.length > 0) {
        const result = [];
        snapshot.forEach((doc) => {
          result.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPosts(result);
        setLoading(false);
      } else {
        setLoading(true);
      }
    });
  }, [status]);
  const navigate = useNavigate();
  if (user?.role !== userRole.ADMIN) return null;
  return (
    <div className=" transition-all ">
      <div className="ml-auto mr-5 flex items-center gap-5 transition-all">
        <span className="relative w-8 cursor-pointer  " onClick={openModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            fill="none"
            height="32"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <span className="absolute top-0 right-0 flex h-5 w-5 translate-x-2/4 items-center justify-center rounded-full bg-red-400 ">
            {total}
          </span>
        </span>
        <p className=" text-lg font-semibold ">
          Posts are waiting for approval
        </p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {loading && (
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <LoadingSpinner type="primary"></LoadingSpinner>
          </div>
        )}
        {!loading && (
          <Table>
            <thead>
              <tr>
                <th>Post</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {total > 0 &&
                posts.length !== 0 &&
                posts.map((item) => (
                  <tr>
                    <td>
                      <div className="flex items-center gap-x-3">
                        <img
                          src={item?.image}
                          alt=""
                          className="h-[77px] w-[88px] rounded object-cover"
                        />
                        <div className="flex-1 whitespace-pre-wrap">
                          <h3 className="max-w-[400px] text-lg font-semibold">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-x-3 text-lg  text-gray-500">
                        <ActionView
                          onClick={() =>
                            navigate(`/manage/update-post?id=${item?.id}`)
                          }
                        ></ActionView>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        )}
      </Modal>
    </div>
  );
};

export default DashboardPage;
