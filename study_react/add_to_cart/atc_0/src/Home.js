import React from "react";
import "./App_tw.css";
import Itemcard from "./Itemcard";
import data from "./data";

const Home = () => {
  // console.log(data.productData);

  return (
    <>
      <h1 className="text-center mt-3 text-3xl">All Items</h1>
      <section className="lg:flex mb-4 m-10 rounded mx-auto">
        {data.productData.map((product) => {
          // const { img, id } = product;
          console.log(product.img);

          return <Itemcard img={product.img} key={product.id} />;
        })}
      </section>
      <img src="./pic/orange.jpeg" alt="" className="h-full" />
      <div>hello</div>
    </>
  );
};

export default Home;
