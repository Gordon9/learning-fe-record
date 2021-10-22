import React from "react";
import "./App_tw.css";
import Itemcard from "./Itemcard";
import data from "./data";

const Home = () => {
  return (
    <>
      <h1 className="text-center mt-3 text-3xl">All Items</h1>
      <section className="lg:flex mb-4 m-10 rounded mx-auto">
        {data.productData.map((product) => {
          return (
            <Itemcard
              img={product.img}
              key={product.id}
              title={product.title}
              price={product.price}
              desc={product.desc}
              item={product}
            />
          );
        })}
      </section>
    </>
  );
};

export default Home;
