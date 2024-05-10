import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { productList } from "../redux/productAction";

const Main = () => {
  const dispatch = useDispatch();
  const productItem = useSelector((state) => state.productData);
  console.log("data in main component from saga", productItem);
  // const vehicleData = {
  //   brand: "Mahindra",
  //   model: "Scorpio",
  //   year: 2020,
  // };
  return (
    <div>
      <h1>Main Component</h1>
      <div>
      <button
        onClick={() => {
         // dispatch(addToCart(vehicleData));
        }}
      > Add To Cart
      </button>

      <button
        onClick={() => {
          //dispatch(removeFromCart(vehicleData.brand));
        }}
      > Remove From Cart
      </button>

      <button
        onClick={() => {
         // dispatch(emptyCart());
        }}
      > Empty Cart
      </button>

      <button
        onClick={() => {
         dispatch(productList());
        }}
      > Get Product List
      </button>
      </div>
      <div className="product-container">
      { 
        productItem.map((item)=><div className="product-item">
          <img src={item.photo} alt=""/>
        </div>)
      }
      </div>
    </div>
  );
};

export default Main;
