import React from "react";
import "./hooks.css";

const Child = (props) => {
  // console.log(props);

  const add2 = () => {
    props.add1(props.ele);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "red",
          marginRight: "20px",
          marginBottom: "20px",
        }}
      >
        <img src={props.ele.img} alt=""></img>
        <div className="para-div">
          <p>{props.ele.para}</p>
          <div className="btn-cls">
            <button
              onClick={() => {
                add2();
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Child;
