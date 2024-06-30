import React from 'react';
import axios from "axios"

const Viewshop = () => {
  const onclickHandler =async ()=> {
    let userData = {
      phone:"777123"
    }
    try{
      let {data} = await axios.post(`http://localhost:2100/getuser`,userData)
      console.log(data)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <div>RRHR SHOP</div>
    <button onClick={onclickHandler}>click to see the result</button>
    </>
  )
}

export default Viewshop