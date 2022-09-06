import React from "react";
import "./hooks.css";


const Child2 = (props) => {
console.log(props);
  // const plusQty = ()=>{
  //   props.plusQty1(props.ele)
  // }
  const add  = () =>{
    props.add1(props.ele)
  }

  const minusQty = ()=>{
    props.minusQty1(props.ele)
  }
  
const removeCart  = () =>{
  props.removeCart(props.ele)
}

  return (
    <div>
     <div style={{backgroundColor:"red" ,marginRight:"20px" , marginBottom:"20px"}}>
        <img src={props.ele.img} alt=""></img>
        <div className="para-div">
          <p>{props.ele.para}</p>
          <h3>qty : {props.ele.qty}</h3>
          <div className="btn-cls">
            <button onClick={()=>{add()}}>+</button>
            <button onClick={() =>{removeCart()}}>Remove cart</button>
            <button onClick={()=>{minusQty()}}>-</button>

          </div>
        </div>
      </div>
      {/* <div>
        <img src={props.ele.img} alt=""></img>
        <div className="para-div">
          <p>{props.ele.para}</p>
         
          <div className="btn-cls">
            <button>Remove cart</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Child2;
