import React, { useState } from "react";
import Child from "./child";
import "./form.css";

const Form = () => {
  const [userName, setName] = useState("");
  const [qty, setQty] = useState(null);
  const [price, setPrice] = useState(null);
  const [errorMsg, setError] = useState("");
  const [emptyArr, setArr] = useState([]);
  // const [se, set] = useState([]);


  const handleSubmit = (event) => {
    event.preventDefault();
    if (errorMsg !== "") return;
    // if((userName ,qty ,price) !=="") return ;
    console.log(userName, qty, price);

    setArr([...emptyArr, { userName, qty, price }]);
    console.log(emptyArr);
    // const obj = [{
    //     name :userName ,
    //     age : setQty
    // }]
    // console.log(obj);

    setName("")
     setQty("")
     setPrice("");
  };

  const handleUserInput = (event) => {
    console.log(event, "e");
    // if (event.target.value === ""){
    if (event.target.name === "userName") {
      setName(event.target.value);
    }
    if (event.target.name === "qty") {
      if (isNaN(event.target.value)) {
        setError("qty is a number");
      } else {
        setError("");
      }
      setQty(event.target.value);
    }
    if (event.target.name === "price") {
      if (isNaN(event.target.value)) {
        setError("price is a number");
      } else {
        setError("");
      }
      setPrice(event.target.value);
    }
  };
  // else {
  //   setError("invalid")
  // }
  // };
 

  const remove = (ele) => {
    console.log(ele, "ele");
    let removeEle = emptyArr.filter((value) => value !== ele);
    console.log(removeEle, "re");
    setArr([...removeEle]);
  };

  const edit = (data) => {

    // let removeValue = emptyArr.filter((value) =>(
    //   value !== data));
    // console.log(removeValue, "re");
    // setArr([...removeValue]);
    let updateEle = emptyArr.indexOf(data)
    let val = emptyArr.at(updateEle)
    console.log(val , "va");
    console.log(data ,"da");
    if (val === data){
    setName(data.userName)
        setQty(data.qty)
       setPrice(data.price)
    }
    
  //   set(
  //     setArr.map(item => 
  //         val === data
  //         ? {...item, someProp : "changed"} 
  //         : item 
  // ))
    //  if ( updateEle === updateEle){
    //   console.log(updateEle);
    //  
    //  }
    
  //   if (data ===)
  };

  return (
    <React.Fragment>
      <div className="input-ele">
        <h1>Mobile brand </h1>
        <label>Enter the product name : </label>
        <input
          name="userName"
          value={userName}
          onChange={handleUserInput}
          placeholder="Enter the product name"
        ></input>
        <br></br>
        <br></br>
        <label style={{ marginLeft: "67px" }}> Enter the qty : </label>
        <input
          name="qty"
          value={qty}
          onChange={handleUserInput}
          placeholder="Enter the qty"
        ></input>
        <br></br>
        <br></br>
        <label style={{ marginLeft: "55px" }}> Enter the price : </label>
        <input
          name="price"
          value={price}
          onChange={handleUserInput}
          placeholder="Enter the price"
        ></input>
        <h2>{errorMsg}</h2>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="div-part">
        {emptyArr.map((ele, index) => (
          <Child key={index} ele={ele} remove={remove} edit={edit} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Form;
