/* eslint-disable @next/next/no-img-element */
import moment from "moment";
import Head from "next/head";
import Footer from "../../components/Footer";
import FormCheckout from "../../components/FormCheckout";
import Navbar from "../../components/Navbar";
import { getData } from "../../utils/fetchData";
import { formatDate } from "../../utils/formatDate";
import { useEffect } from "react";
import Button from "../../components/Button";
import Link from "next/link";

export default function Dashboard({ data }) {
  return (
    <>
      <Head>
        <title>Tokosidia || Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-navy">
        <Navbar />
      </section>

      <section className="bg-navy">
        <div className="dashboard-menu container d-flex flex-row justify-content-between">
          <div className="side-menu-btn p-4">
            <div className="side-profile mb-4 justify-content-around">
              <img
                className="rounded-circle"
                src={"/images/details-image.png"}
                width={100}
                height={100}
                alt="tokosidia"
              />
              <div className="side-profile-info ml-2 mt-3">
                <h3>acep nurman</h3>
              </div>
            </div>
            <div className="side-btn d-flex flex-column">
              <Link href={"/dashboard"} className="btn-side-group d-flex">
                <Button
                  variant={"btn-side-menu"}
                  action={() => console.log("first")}
                >
                  Dasboard
                </Button>
              </Link>
              <Link href={"/favorite"} className="btn-side-group d-flex">
                <Button
                  variant={"btn-side-menu bg-primary text-white"}
                  action={() => console.log("first")}
                >
                  Favorite
                </Button>
              </Link>
              <Link href={"/cart"} className="btn-side-group d-flex">
                <Button
                  variant={"btn-side-menu"}
                  action={() => console.log("first")}
                >
                  Cart
                </Button>
              </Link>
              <Link href={"/setting"} className="btn-side-group d-flex">
                <Button
                  variant={"btn-side-menu"}
                  action={() => console.log("first")}
                >
                  Setting
                </Button>
              </Link>
            </div>
          </div>
          <div className="side-menu-info p-4">
            <div className="header-side-menu">
              <h2 className="mb-3 mt-4">Favorite</h2>
              <p>
                Segera checkout barang impian anda sebelum ketersediaan menipis
              </p>
            </div>
            <div className="trx-side-menu p-3">
              <div className="item-list-trx d-flex flex-row justify-content-between">
                <div className="info-trx-product d-flex flex-row justify-content-between">
                  <img
                    src={"/images/details-image.png"}
                    width={90}
                    alt="tokosidia"
                  />
                  <div className="info-product-trx d-flex flex-column">
                    <div>Ayam</div>
                    <div>Rp.444</div>
                  </div>
                </div>
                <div className="info-product-status d-flex justify-content-center align-items-center">
                  <div>success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

// export async function getServerSideProps(context) {
//   const req = await getData(`/api/v1/orders`, {}, context.req.cookies.token);

//   const res = req.data;

//   return {
//     props: { data: res },
//   };
// }
