import React, { useState } from "react";
import Child from "./Child";
import Child2 from "./Child2";

const Trial = () => {
  const [arr, setCart] = useState([]);
  const [name] = useState([
    {
      id: 1,
      img: require("../../assets/1.jpg"),
      para: " This new function useState is the first Hook well learn about but this example is just a teaser. Dont worry if it doesnt make sense yet",
    },
    {
      id: 2,
      img: require("../../assets/2.webp"),
      para: " This new function useState is the first Hook well learn about but this example is just a teaser. Dont worry if it doesnt make sense yet",
    },
    {
      id: 3,
      img: require("../../assets/3.jpg"),
      para: "Receive WhatsApp messages online on your Desktop PC or Tablet. WhatsApp Web is the browser-based PC client of WhatsApp",
    },
    {
      id: 4,
      img: require("../../assets/4.jpg"),
      para: " This new function useState is the first Hook well learn about but this example is just a teaser. Dont worry if it doesnt make sense yet",
    },
  ]);

  // addto cart &  to add qty
  const add = (plus) => {
    console.log(plus);
    const isExit = arr.some((plusData) => plus.id === plusData.id);
    console.log(isExit);
    if (isExit === true) {
      const item = arr.map((value) => {
        console.log(value, "val");
        if (value.id === plus.id) {
          return {
            ...value,
            qty: value.qty + 1,
          };
        } else {
          return value;
        }
      });

      setCart([...item]);
    } else {
      setCart([...arr, { ...plus, qty: 1 }]);
    }
  };


  // to decrease the qty 
  const minusQty = (minus) => {
    if (minus.qty > 1) {
      const isExit = arr.some((plusData) => minus.id === plusData.id);
      console.log(isExit);
      if (isExit === true) {
        const item = arr.map((value) => {
          console.log(value, "val");
          if (value.id === minus.id) {
            return {
              ...value,
              qty: value.qty - 1,
            };
          } else {
            return value;
          }
        });
        setCart([...item]);
      }
    }
    else {
      const eraseZero = arr.filter((data) => {
        return data !== minus;
      });
      setCart([...eraseZero]);
    }
  };

// to remove the cart
  const removeCart = (removeC) => {
    const eraseEle = arr.filter((data) => {
      return data !== removeC;
    });
    setCart([...eraseEle]);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>VARITY OF BIRDS</h1>
      <div className="add-div">
        {name.map((ele, inde) => (
          <Child key={inde} ele={ele} add1={add} />
        ))}
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>ADD TO CART</h1>
        <div className="add-div">
          {arr.map((ele, inde) => (
            <Child2
              key={inde}
              ele={ele}
              // plusQty1={plusQty}
              add1={add}
              minusQty1={minusQty}
              removeCart={removeCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trial;
