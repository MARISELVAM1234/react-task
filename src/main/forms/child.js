import React from 'react'

const Child = (props) => {

 const remove = () =>{
      props.remove (props.ele)
  }

  const edit = () =>{
    props.edit (props.ele)
  }

  return (
    <div>
      <div className='sub-main'>
        <h2> Brand : {props.ele.userName}</h2>
        <h2> Qty : {props.ele.qty}</h2>
        <h3> Price :{props.ele.price}</h3>
        <button id="btn-part" onClick={() =>{edit()}}>Edit</button>
        <button onClick={() => {remove()}}>Remove</button>
        </div>
    </div>
  )
}

export default Child