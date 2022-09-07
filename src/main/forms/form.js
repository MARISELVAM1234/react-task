import React, { useState } from "react";
import Child from "./child";
import "./form.css";

const Form = () => {
  const [userName, setName] = useState("");
  const [qty, setQty] = useState(null);
  const [price, setPrice] = useState(null);
  const [errorMsg, setError] = useState("");
  const [emptyArr, setArr] = useState([]);
  const [storedArr , setStore] = useState([])
  const [check , setCheck] = useState(false)


  const handleSubmit = (element) => {
    element.preventDefault();
    if (errorMsg !== "") return;
      setArr([...emptyArr, {id:emptyArr.length+1 , userName, qty, price }]);
      // console.log(emptyArr)

    setName("")
     setQty("")
     setPrice("");
  };


//update value
 const update= () =>{
  setName("")
  setQty("")
  setPrice("");
  setCheck(false)

  let st = storedArr

  const isExit = emptyArr.some((product) =>  product.id === st.id )
  if(isExit) {
    let a = emptyArr.map((ele) =>{
      if (ele.id === st.id){
        return {
          ...ele, userName:userName ,price:price  ,qty :qty
        }      
      }
      else{
        return {
          ...ele
        }
      }
      
    })
    setArr(a)
    }

 }


  const handleUserInput = (event) => {
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


  const remove = (ele) => {
    let removeEle = emptyArr.filter((value) => value !== ele);
    setArr([...removeEle]);
  };

  const edit = (data) => {
    setCheck(true)
    let updateEle = emptyArr.indexOf(data)
    let val = emptyArr.at(updateEle)
  setStore(data)

    if (val === data){
    setName(data.userName)
        setQty(data.qty)
       setPrice(data.price)
    }
  };
console.log("stored",storedArr);


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
        {!check?<button onClick={handleSubmit}>Submit</button> : <button onClick={update}>update</button>}
        {/* <button onClick={handleSubmit}>Submit</button> */}
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
