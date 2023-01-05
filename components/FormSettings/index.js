import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button";
import TextInput from "../TextInput";
import { useRouter } from "next/router";
import { postData, putData } from "../../utils/fetchData";
import { toast } from "react-toastify";

const FormSettings = ({ user }) => {
  const router = useRouter();
  const { keyword } = router.query;
  const [form, setForm] = useState({
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await putData("api/v1/sign-up", form);

    if (res) return router.push("/signin");
  };

  return (
    <form className="form-login d-flex flex-column mt-4 mt-md-0">
      <>
        <TextInput
          label={"Your Location"}
          type={"text"}
          value={form.address}
          name="address"
          placeholder="Your address here"
          onChange={handleChange}
        />
      </>

      <div className="d-grid mt-2">
        <Button variant={"btn-green"} action={() => handleSubmit()}>
          {keyword === "code" ? "Verification" : "Update"}
        </Button>
      </div>
    </form>
  );
};

export default FormSettings;
