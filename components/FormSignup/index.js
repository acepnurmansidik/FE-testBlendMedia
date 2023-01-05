import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button";
import TextInput from "../TextInput";
import { useRouter } from "next/router";
import { postData, putData } from "../../utils/fetchData";
import { toast } from "react-toastify";

const FormSignup = () => {
  const router = useRouter();
  const { keyword } = router.query;
  const [otp, setOtp] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (form.password !== form.confirmPassword) {
      return toast.error("Password tidak sesuai", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    const res = await postData("api/v1/sign-up", form);

    if (res) return router.push("/signin");
  };

  return (
    <form className="form-login d-flex flex-column mt-4 mt-md-0">
      {keyword === "otp" ? (
        <TextInput
          label={"otp"}
          type={"text"}
          value={otp}
          name="otp"
          placeholder="Enter opt here"
          onChange={(e) => {
            setOtp(e.target.value);
          }}
        />
      ) : (
        <>
          <TextInput
            label={"Your Name"}
            type={"text"}
            value={form.name}
            name="name"
            placeholder="Your name here"
            onChange={handleChange}
          />

          <TextInput
            label={"Email"}
            type={"email"}
            name="email"
            value={form.email}
            placeholder={"youremail@gmail.com"}
            onChange={handleChange}
          />

          <TextInput
            label={"Password (6 characters)"}
            type={"password"}
            value={form.password}
            name="password"
            placeholder="Type your password"
            onChange={handleChange}
          />

          <TextInput
            label={"Confirm  Password (6 characters)"}
            type={"password"}
            value={form.confirmPassword}
            name="confirmPassword"
            placeholder="Type your confirm password"
            onChange={handleChange}
          />
        </>
      )}

      <div className="d-grid mt-2">
        <Button variant={"btn-green"} action={() => handleSubmit()}>
          {keyword === "code" ? "Verification" : "Sign Up"}
        </Button>
      </div>
    </form>
  );
};

export default FormSignup;
