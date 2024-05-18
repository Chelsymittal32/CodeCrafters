import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { IoFilter } from 'react-icons/io5';
import { useLocation, useNavigate} from 'react-router-dom'
import '../StyleComp/searchcomp.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const SearchComp = () => {
    const loc = useLocation()
    const Data = loc.state.data
    const catstate = loc.state.state
    // console.log(loc);
    // const Nav = useNavigate()

    // add to cart

    const [items,setItems] =useState();
    useEffect(()=>{
        axios.get("http://localhost:5000/api/getcartdata").
        then((res)=>setItems(res.data)).catch((err)=>console.log("Cart error", err))
    },[catstate])

    const token = localStorage.getItem("token")

    const addcartitem = async(item)=>{
        console.log(item.id);
        console.log(items);
        const letsfind = items.find((items)=>items.id === item.id)

        
        if(token){
            const letsfind = items.find((items)=>items.id === item.id)
  
            if(letsfind)
            {
                toast.success("Item is already Added in cart check your Cart");
            }
            else{
                await axios.post('http://localhost:5000/api/addcart',item);
            }
        }
        else{
            toast.warn("Need to Login first");
        }
    }

  return (
    <div className='searchmainsection'>
        
        <h1 className='resultno'>{`${Data.length} results for "${catstate}"`}</h1>
        
        <div className="searchfilterstatic">
            <div className='searchfilterbtn'>
                <IoFilter/><span>Filter</span>
            </div>
            <div className='searchsort'>
                <div className='searchinner-sort'>
                <span>Sort by</span>
                <p>Most Popular</p>
                </div>
                <IoIosArrowDown className='searcharrowdown'/>
            </div>
        </div>

        <div className='searchmainContentParent'>

            {/* rating */}

            <div className='searchrating'>
                <h3>Ratings</h3>
                <span className='searchratingspan'>
                    <input type='radio' name='rate' />⭐⭐⭐⭐⭐ 4.5 & up (1,231)<br/>
                    <input type='radio' name='rate' />⭐⭐⭐⭐⭐ 4.5 & up (2,281)<br/>
                    <input type='radio' name='rate' />⭐⭐⭐⭐⭐ 4.5 & up (2,631)<br/>
                    <input type='radio' name='rate' />⭐⭐⭐⭐⭐ 4.5 & up (2,831)<br/>
                </span>
            </div>

            {/* content card */}

            <div className='searchmaincontentcard-section'>
                {
                    Data === 'Invalid search' ? " "
                    :
                    Data && Data.map((item,index)=>{
                        return(
                            <div key={index} className='searchmaincontentcard'>
                                <img src={item.img} />
                                <div className='searchmaincontentcard1'>
                                    <h3 className='searchheading'>{item.heading}</h3>
                                    <p className='searchmaindes'>{item.des}</p>
                                    <p className='searchmainauthor'>{item.author}</p>
                                    <h4>{`${item.rating} ⭐⭐⭐⭐⭐`}</h4>
                                    <p className='searchmaincourseDesc'>8 total .84 lectures .All Levels</p>
                                </div>
                                <h3 className='searchprice'>{"₹"+item.price}</h3>

                                <div className='searchcardhovertemplate'>
                                        <h3>{`${item.heading}`}</h3>
                                        <span>{item.author}</span>
                                        <p>{item.des}</p>
                                        <div className='searchaddtocartbtn' onClick={()=>addcartitem(item)}>
                                        Add to cart
                                        </div>
                                    </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>

        <ToastContainer/>

    </div>
  )
}

export default SearchComp