import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import data from "../data.json";
import { saveData } from "./des";
import "./Desc.css";
import PlayStore from "./PlayStore";

const description = () => {
  console.log(data);

//   const [cart, setCart] = useState([])

  const handleClick = () => {
    // useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(data));
      // },[data]);
  };

// const handleClick = (key,data) => {
//     saveData("cart",data)
// }


  return (
    <div id="div">
      <img
        width="100%"
        height="400px"
        src="https://images.trvl-media.com/hotels/4000000/3020000/3016200/3016196/41587793.jpg?impolicy=resizecrop&rw=598&ra=fit"
        alt=""
      />

      <div id="maindiv">
        <div id="head">You were interested in this property</div>

        <div className="container">
          {data.map((elem) => {
            return (
              <>
                <div className="cont">
                  <div id="image">
                    <img src={elem.imgURL} alt="" />
                  </div>
                  <div id="details">
                    <h3>{elem.title}</h3>
                    <p>{elem.place}</p>
                    <p className="desc">{elem.desc}</p>
                    <p>
                      <span className="span">{elem.rating} </span> {elem.review}
                    </p>
                    <hr />
                    <button className="btn" onClick={handleClick()}>
                      Select your room{" "}
                    </button>
                  </div>
                  <div className="price">₹ {elem.price}</div>
                </div>
              </>
            );
          })}
        </div>

        <div id="store">
          <PlayStore />
        </div>
      </div>
    </div>
  );
};

export default description;
