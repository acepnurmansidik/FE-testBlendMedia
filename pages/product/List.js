/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import { deleteData } from "../../utils/fetchData";

export default function List({ data }) {
  const router = useRouter();
  const handleDelete = async (id) => {
    const res = await deleteData(`/api/v1/product/${id}`);

    toast.success("berhasil delete create category", {
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
        <h2 className="mb-3 mt-4">Products</h2>
        {/* <p>Rp. 324324</p> */}
      </div>

      <div
        className="icon-btn btn-navigation"
        onClick={() => router.push("/product/create")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-circle-fill"
          viewBox="0 0 16 16"
        >
          {" "}
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />{" "}
        </svg>{" "}
        Add
      </div>

      {data.map((dataTrx) => (
        <div className="trx-side-menu p-3 mt-2" key={dataTrx._id}>
          <div className="item-list-trx d-flex flex-row justify-content-between">
            <div className="info-product-status d-flex flex-row justify-content-between">
              <div className="d-flex flex-row">
                <img
                  src={
                    dataTrx?.product_image_url?.name
                      ? `${process.env.NEXT_PUBLIC_API_IMAGE}/${dataTrx.product_image_url.name}`
                      : "/images/download.png"
                  }
                  height={30}
                  alt="semina"
                />
                <div className="icon-btn">{dataTrx.product_name}</div>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <div
                  className="icon-btn"
                  onClick={() => router.push(`/product/update/${dataTrx._id}`)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />{" "}
                  </svg>
                </div>
                <div
                  className="icon-btn"
                  onClick={() => handleDelete(dataTrx._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />{" "}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
