import { baseURL } from "api/axios";
import axios from "axios";
import { Button } from "components/button";
import { Field, FieldCheckboxes } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import DashboardHeading from "modules/dashboard/DashboardHeading";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const CategoryUpdate = () => {
  const {
    control,
    watch,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
    },
  });
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [params] = useSearchParams();
  const houseId = params.get("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios({
          method: "get",
          url: `${baseURL}/api/houseTypes/${Number(houseId)}`,
          headers: {
            Authorization: userData.access_token,
          },
        }).then(function (response) {
          console.log(response);

          reset({
            ...response?.data?.data,
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [houseId, reset, userData.access_token]);
  const handleAddNewCategory = async (values) => {
    const fetchData = async () => {
      try {
        await axios({
          method: "put",
          url: `${baseURL}/api/houseTypes/${houseId}?name=${values.name}`,
          headers: {
            Authorization: userData.access_token,
          },
        })
          .then(function (response) {
            toast.success("Sửa thành công");
          })
          .catch(function (response) {
            toast.error("Sửa thất bại");
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  const watchStatus = watch("status");
  console.log(watchStatus);
  return (
    <div>
      <DashboardHeading title="Update category"></DashboardHeading>
      <form onSubmit={handleSubmit(handleAddNewCategory)} autoComplete="off">
        <div className="form-layout">
          <Field>
            <Label>Name</Label>
            <Input
              control={control}
              name="name"
              placeholder="Enter your category name"
              required
            ></Input>
          </Field>
        </div>

        <Button
          kind="primary"
          style={{ width: "100%", maxWidth: 250, margin: "0 auto" }}
          type="submit"
          isLoading={isSubmitting}
          disable={isSubmitting}
          className="mx-auto"
        >
          Update category
        </Button>
      </form>
    </div>
  );
};

export default CategoryUpdate;
