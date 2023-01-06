import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import { putData } from "../../../utils/fetchData";

export default function FormUpdate({ data, token }) {
  const router = useRouter();
  const [form, setForm] = useState({
    product_name: data.product_name,
    product_brand: data.product_brand,
    product_price: data.product_price,
    product_qty: data.product_qty,
    real_pdp_url: data.real_pdp_url,
    description: data?.description,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await putData(`/api/v1/product/${data._id}`, form, token);

    toast.success("berhasil new create category", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    router.push("/product");
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
            label={"Product name"}
            type={"text"}
            value={form.product_name}
            name="product_name"
            placeholder="Product name here"
            onChange={handleChange}
          />
          <TextInput
            label={"Product brand"}
            type={"text"}
            value={form.product_brand}
            name="product_brand"
            placeholder="Product brand here"
            onChange={handleChange}
          />
          <TextInput
            label={"Product price"}
            type={"text"}
            value={form.product_price}
            name="product_price"
            placeholder="Product price here"
            onChange={handleChange}
          />
          <TextInput
            label={"Product qty"}
            type={"text"}
            value={form.product_qty}
            name="product_qty"
            placeholder="Product qty here"
            onChange={handleChange}
          />
          <TextInput
            label={"Product link"}
            type={"text"}
            value={form.real_pdp_url}
            name="real_pdp_url"
            placeholder="Product link here"
            onChange={handleChange}
          />
          <TextInput
            label={"Product description"}
            type={"text"}
            value={form.description}
            name="description"
            placeholder="Product description here"
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
