import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://fortnite-api.com/v1/playlists");
    const items = await data.json();
    console.log("items:", items.data);
    // console.log("items:", items.data.pois);
    // setItems(items.data.pois);
    setItems(items.data);
  };

  return (
    <div>
      <h1>Shop Page</h1>
      <div>
        {items.map((item) => (
          <p key={item.id}>
            <Link to={`/shop/${item.id}`}>{item.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Shop;
