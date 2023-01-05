/* eslint-disable @next/next/no-img-element */
import React from "react";
import CardTitle from "../CardTitle";
import Link from "next/link";
import { formatDate } from "../../utils/formatDate";

const CardEvent = ({ data, title, subTitle }) => {
  return (
    <section className="grow-today">
      <div className="container">
        <CardTitle title={title} subTitle={subTitle} />
        <div className="mt-5 row gap">
          {data.map((data, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <Link href={`/detail/${data._id}`}>
                <div className="card-grow h-100">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_IMAGE}/${data.product_image_url.name}`}
                    alt="semina"
                  />
                  <div className="card-content">
                    <div className="card-title">{data.product_name}</div>
                    <div className="card-subtitle">{data.product_brand}</div>
                    <div className="description">
                      {new Intl.NumberFormat("id", {
                        style: "currency",
                        currency: "IDR",
                      }).format(data.product_price)}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardEvent;
