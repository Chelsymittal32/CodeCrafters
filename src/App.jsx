import React from 'react'
import Navbar from './Component/NAvFoot/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Navstore from './Component/Navstore'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Contextstore from './Component/ContextStore/store'
import Footer from './Component/NAvFoot/Footer'
import { ColorRing } from 'react-loader-spinner'
import './index.css'

const App = () => {
  const [apidata,setApidata] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/api/getdata").
    then((res)=>setApidata(res.data)).catch((err)=>console.log("Get data error", err))
  },[])
  // console.log(apidata);

  const [ContextData] = useState(Contextstore)
  return (
    
    <div>
       {
          apidata.length < 1 
          ? <div className='Loader'>
            <ColorRing
              visible={true}
              height="150"
              width="150"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </div>
          :
          <BrowserRouter>
          <ContextData.Provider value={apidata}>
          <Navbar/>
          <Navstore/>
          </ContextData.Provider>
          <Footer/>
          </BrowserRouter>
       }
      
    </div>
  )
}

export default App