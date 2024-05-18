import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../StyleComp/cart.css'
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const Cart = () => {
  const [items,setItems] =useState([]);
  const Nav = useNavigate();
  const email = localStorage.getItem("email")
  useEffect(()=>{
    axios.get("http://localhost:5000/api/getcartdata").
    then((res)=>setItems(res.data)).catch((err)=>console.log("Cart error", err))
  },[items,Nav])
  // console.log(items);

  const newCart = items?.filter(i=> i.proID == email)

  const[sum,setSum] = useState()

  useEffect(()=>{
    let value = 0
    newCart.map((item)=> value+=item.price)
    setSum(value)
  },[items])

   // payment

   const stripePayment = async()=>{
   
  const stripe =await loadStripe("pk_test_51OFIngSEzJx90BYMsS58schJO5W4mfb11nhMesoKWfuGwRPqPNyK7cRkpqoxSPdrZZjAHcwlKx1UHmOHvad4Xx0X00jzoYxvbR")

  const body ={
    Cartitem:items,
    Total:sum
  }
  const headers={
    "Content-Type":"application/json"
  }
  const response = await fetch("http://localhost:5000/api/out/create-checkout-session",{
          method:"POST",
          headers:headers,
          body:JSON.stringify(body)
  })
  await axios.post("http://localhost:5000/api/mylearning",items)  //addlearning

  await axios.delete("http://localhost:5000/api/deleteallcart")  // delete
  const session= await response.json();

  const result =stripe.redirectToCheckout({
    sessionId:session.id
  })
  if(result.error){
    console.log(result.error)
  }
  }

  if(newCart.length === 0)
  {
    return(
      <div className='emptycard' >
        <img src='	https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg' />
        <p>Your Cart is empty.keep shopping to find course.</p>
        <div className='emptybtn' onClick={()=>Nav("/")}>Keep shopping</div>
      </div>
    )
  }

  const handleremove = async(itemid)=>{
    await axios.post("http://localhost:5000/api/removeitem",{id:itemid})
  }

  return (
    <div className='cartparent'>
      
      <div className='cartparent1'>

      <div className='cartheading'>
      <h1>Shopping Cart</h1>
      </div>
      
      <div className='cartsection'>
       <div>
       {
        newCart && newCart.map((item,index)=>{
          // const{id=item.id} = item
          return(
            <div key={index} className='cartcontentcard'>
                <img src={item.img} />
                <div className='cartcontentcard1'>
                    <h2>{item.heading}</h2>
                    <p className='cartdes'>{item.des.slice(0,84) +"..."}</p>
                    <p className='cartauthor'>{item.author}</p>
                    <h3>{`${item.rating} ⭐⭐⭐⭐⭐`}</h3>
                    <p className='cartcourseDesc'>8 total .84 lectures .All Levels</p>
                </div>
                <p className='remove' onClick={()=>handleremove(item.id)}>Remove</p>
                <h2>{"₹"+item.price}</h2>
              </div>
          )
        })
      }
       </div>
      <div className='totalsection'>
        <p>Total:</p>
        <h1>{`₹ ${sum}`}</h1>
        <div className='checkout' onClick={stripePayment}>Checkout</div>
      </div>
      </div>

      </div>

    </div>
  )
}

export default Cart