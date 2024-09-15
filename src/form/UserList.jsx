import React, { useState, useEffect } from "react";
import "../App.css";
const     Productlist = () => {
  const [product, setProduct] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/product/list")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  });


  return (
    <>
      {product && (
        <div className="card">


          {product.map((pr) => {
            return (
              <div class="container">
                <h4>
                  <b>{pr.name}</b>
                </h4>
                <p>{pr.desc}</p>
              </div>
            );
          })}
          {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
        </div>
      )}
    </>
  );
};

export default Productlist;
