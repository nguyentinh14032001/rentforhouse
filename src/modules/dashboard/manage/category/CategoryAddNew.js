import { baseURL } from "api/axios";
import axios from "axios";
import { Button } from "components/button";
import { Field, FieldCheckboxes } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import DashboardHeading from "modules/dashboard/DashboardHeading";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CategoryAddNew = () => {
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
      slug: "",
      status: 1,
      createdAt: new Date(),
    },
  });
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const handleAddNewCategory = async (values) => {
    const fetchData = async () => {
      try {
        await axios({
          method: "post",
          url: `${baseURL}/api/houseTypes?name=${values.name}`,
          headers: {
            Authorization: userData.access_token,
          },
        })
          .then(function (response) {
            toast.success("Thêm thành công");
          })
          .catch(function (response) {
            toast.error("a");
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
      <DashboardHeading
        title="New category"
        desc="Add new category"
      ></DashboardHeading>
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
          Add new category
        </Button>
      </form>
    </div>
  );
};

export default CategoryAddNew;
