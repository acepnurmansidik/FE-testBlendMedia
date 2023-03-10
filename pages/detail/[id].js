/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Button from "../../components/Button";
import CardEvent from "../../components/CardEvent";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import { getData, postData } from "../../utils/fetchData";
import moment from "moment";
import { formatDate } from "../../utils/formatDate";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export default function DetailPage({ detailPage, id }) {
  const [data, setData] = useState([]);
  const [qty, setQty] = useState(1);
  const [form, setForm] = useState({
    _id: detailPage._id,
    product_name: detailPage.product_name,
    sumQty: 0,
  });

  useState(() => {
    const fetchData = async () => {
      try {
        const res = await getData("api/v1/product");

        setData(res.data);
      } catch (err) {}
    };

    fetchData();
  });

  const router = useRouter();

  const handleSubmit = async () => {
    const token = Cookies.get("token");
    if (!token) {
      return router.push("/signin");
    } else {
      if (qty > 0) {
        const res = await postData("/api/v1/order", form, token);

        console.log(res);
        if (res) {
          toast.success("berhasil transaksi berhasil", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          router.push("/");
        }
      }
    }
  };

  return (
    <>
      <Head>
        <title>Tokosidia || Detail Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-navy">
        <Navbar />
      </section>

      <div className="preview-image bg-navy text-center mt-4">
        <img
          src={
            detailPage?.product_image_url?.name
              ? `${process.env.NEXT_PUBLIC_API_IMAGE}/${detailPage?.product_image_url?.name}`
              : "/images/download.png"
          }
          className="img-content"
          alt="tokosidia"
        />
      </div>
      <div className="details-content container">
        <div className="d-flex flex-wrap justify-content-lg-center gap">
          <div className="d-flex flex-column description">
            <div className="headline mb-3">{detailPage.product_name}</div>
            <h3>
              {new Intl.NumberFormat("id", {
                style: "currency",
                currency: "IDR",
              }).format(detailPage.product_price)}
            </h3>
            <br />
            <div className="map-location">
              <h6>Deskripsi</h6>
              <p>{detailPage.description ? detailPage.description : "-"}</p>
            </div>
          </div>

          <div className="d-flex flex-column card-event">
            <h6>Atur jumlah dan catatan</h6>
            <div className="d-flex align-items-center gap-3 mt-3">
              <img
                src={
                  detailPage?.product_image_url?.name
                    ? `${process.env.NEXT_PUBLIC_API_IMAGE}/${detailPage?.product_image_url?.name}`
                    : "/images/download.png"
                }
                alt="semina"
                width="60"
              />
            </div>
            <hr />

            <div className="qty-count">
              <div className="qty-count">
                <Button
                  action={() => {
                    if (detailPage.product_qty > 0 && qty !== 0) {
                      setQty(qty - 1);
                      form.sumQty = qty;
                    }
                  }}
                  variant={"btn-stok"}
                >
                  -
                </Button>
                <div className="qty-info">{qty}</div>
                <Button
                  action={() => {
                    if (
                      detailPage.product_qty > 0 &&
                      qty !== detailPage.product_qty
                    ) {
                      setQty(qty + 1);
                      form.sumQty = qty;
                    }
                  }}
                  variant={"btn-stok"}
                >
                  +
                </Button>
              </div>
              <p>stok: {detailPage.product_qty}</p>
            </div>
            <div className="price my-3">
              <span>Sub Total:</span>
              <span>
                {new Intl.NumberFormat("id", {
                  style: "currency",
                  currency: "IDR",
                }).format(detailPage.product_price * qty)}
              </span>
            </div>

            <Button variant={"btn-green"} action={() => handleSubmit()}>
              Checkout
            </Button>
          </div>
        </div>
      </div>

      <CardEvent data={data} title="Similiar Products" subTitle="Next One" />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await getData(`api/v1/product/${context.params.id}`);

  return {
    props: { detailPage: res.data, id: context.params.id },
  };
}
