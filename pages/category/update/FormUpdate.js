import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import { postData, putData } from "../../../utils/fetchData";

export default function FormUpdate({ data, token }) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: data.name,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await putData(`/api/v1/categories/${data._id}`, form, token);

    toast.success("berhasil new create category", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    router.push("/category");
  };

  return (
    <div className="side-menu-info p-4">
      <div className="header-side-menu mb-5">
        <h2 className="mb-3 mt-4">My Transaction</h2>
        {/* <p>Rp. 324324</p> */}
      </div>
      <form className="form-login d-flex flex-column mt-4 mt-md-0">
        <>
          <TextInput
            label={"Name category"}
            type={"text"}
            value={form.name}
            name="name"
            placeholder="Name category here"
            onChange={handleChange}
          />

          <div className="d-grid mt-2">
            <Button variant={"btn-green"} action={() => handleSubmit()}>
              Submit
            </Button>
          </div>
        </>
      </form>
    </div>
  );
}
