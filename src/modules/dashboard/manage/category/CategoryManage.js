import { baseURL } from "api/axios";
import axios from "axios";
import { ActionDelete, ActionEdit, ActionView } from "components/action";
import { Button } from "components/button";
import { LabelStatus } from "components/label";
import { Table } from "components/table";
import DashboardHeading from "modules/dashboard/DashboardHeading";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const CATEGORY_PER_PAGE = 2;

const CategoryManage = () => {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const [lastDoc, setLastDoc] = useState();
  const [total, setTotal] = useState(0);
  const [isChange, setIsChange] = useState(false);
  //get category
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios({
          method: "get",
          url: `${baseURL}/api/houseTypes`,
        })
          .then(function (response) {
            setCategoryList(response?.data?.data);
            console.log(response?.data?.data);
            setIsChange(false);
          })
          .catch(function (response) {
            toast.error("a");
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [isChange]);

  //delete category
  const handleDeleteCategory = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios
            .delete(`${baseURL}/api/houseTypes/${id}`, {
              headers: {
                Authorization: userData.access_token,
              },
            })
            .then((res) => {
              console.log(res);
              if (res?.data?.data?.message == "successful delete") {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                setIsChange(true);
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  //search filter
  // const handleInputFilter = debounce((e) => {
  //   setFilter(e.target.value);
  // }, 500);

  //paginate
  // const handleLoadMoreCategory = async () => {
  //   const nextRef = query(
  //     collection(db, "categories"),
  //     startAfter(lastDoc),
  //     limit(CATEGORY_PER_PAGE)
  //   );
  //   onSnapshot(nextRef, (snapshot) => {
  //     let results = [];
  //     snapshot.forEach((doc) => {
  //       results.push({
  //         id: doc.id,
  //         ...doc.data(),
  //       });
  //     });
  //     setCategoryList([...categoryList, ...results]);
  //   });
  //   //get first doc
  //   const documentSnapshots = await getDocs(nextRef);

  //   //get last doc
  //   const lastVisible =
  //     documentSnapshots.docs[documentSnapshots.docs.length - 1];
  //   setLastDoc(lastVisible);
  // };

  return (
    <div>
      <DashboardHeading title="Categories" desc="Manage your category">
        <Button kind="ghost" height="60px" href="/manage/add-category">
          Create category
        </Button>
      </DashboardHeading>
      <div className="mb-10 flex justify-end">
        <input
          type="text"
          className="rounded-lg border-2 border-gray-200 p-[16px]"
          placeholder="Search category....."
          // onChange={handleInputFilter}
        />
      </div>
      <Table>
        <thead>
          <tr>
            <th></th>

            <th>Loại nhà</th>
            <th>Người tạo</th>
            <th>Người sửa</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categoryList &&
            categoryList.length > 0 &&
            categoryList.map((item) => (
              <tr key={item?.id}>
                <td></td>

                <td>{item?.name}</td>

                <td>
                  <div className="flex items-center justify-center gap-x-3">
                    <div className="flex-1 ">
                      <h3 className="font-semibold">{item?.createdBy}</h3>
                      <time className="text-sm text-gray-400">
                        {moment(item?.createdDate).format(
                          "MM/DD/YYYY (hh:mm:ss a)"
                        )}
                      </time>
                    </div>{" "}
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center gap-x-3">
                    <div className="flex-1 ">
                      <h3 className="font-semibold">{item?.modifiedBy}</h3>
                      <time className="text-sm text-gray-400">
                        {moment(item?.modifiedDate).format(
                          "MM/DD/YYYY (hh:mm:ss a)"
                        )}
                      </time>
                    </div>{" "}
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-x-3">
                    <ActionView></ActionView>
                    <ActionEdit
                      onClick={() =>
                        navigate(`/manage/update-category?id=${item?.id}`)
                      }
                    ></ActionEdit>
                    <ActionDelete
                      onClick={() => handleDeleteCategory(item?.id)}
                    ></ActionDelete>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {/* {total > categoryList.length && (
        <div className="mt-10">
          <Button className="mx-auto" onClick={handleLoadMoreCategory}>
            Load more
          </Button>
        </div>
      )} */}
    </div>
  );
};

export default CategoryManage;
