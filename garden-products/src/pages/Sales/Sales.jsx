import React from "react";

import ProductItem from "../../components/ProductItem/ProductItem";
import SortForm from "../../components/SortForm/SortForm";

import "../Products/Products";
import styles from "./Sales.module.css";
const Sales = (props) => {
  return (
    <>
      <div className="allproducts">
        <div className="container">
          <div className="allproducts__title">
            <h2>Discounted items</h2>
          </div>
          <SortForm />
          <div className={styles.items}>
            {props.products
              .filter((product) => product.discont_price !== null)
              .map((product) => {
                return (
                  <ProductItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    image={`http://localhost:3333${product.image}`}
                    price={product.price}
                    discont_price={product.discont_price}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
