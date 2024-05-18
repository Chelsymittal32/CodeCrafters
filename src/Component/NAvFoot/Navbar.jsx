import React, { useEffect, useState } from 'react'
import logo from '../../assets/Udemy_logo.svg.png'
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import '../StyleComp/Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {
  const category = ["Business","Finance & Accounting","IT & Software","Design","Marketing","Life Style","Photography & Video","Music & Arts","Health & Fitness","Teaching & Academic"]
  const subcategory = [
    {
      category:"Business",
      content:["Communication","Managements","Business Strategy","Operations","Human Resources"]
    },
    {
      category:"Finance & Accounting",
      content:["Accounting & Bookkeeping","Compliance","Economic","Finance","Taxes"]
    },
    {
      category:"IT & Software",
      content:["IT Certification","Network & Security","Hardware","Operating system & Servers","Other IT & Software"]
    },
    {
      category:"Design",
      content:["Web Design","Game Design","3D & Animation","Fashion Design","Other Design"]
    },
    {
      category:"Marketing",
      content:["Digital Marketing","Social Media Marketing","Public Relationship","Content Marketing","Product Marketing"]
    },
    {
      category:"Life Style",
      content:["Arts & Crafts","Beauty & Makeup","Food & Beverage","Pet Care & Training","Travel"]
    },
    {
      category:"Photography & Video",
      content:["Digital Photography","Photography","Video Design","Commercial Photography","Photography Tools"]
    },
    {
      category:"Music & Arts",
      content:["Instruments","Music Production","Vocal","Music Software","Music Techniques"]
    },
    {
      category:"Health & Fitness",
      content:["Fitness","Sport","Yoga","Menatl Health","Dance"]
    },
    {
      category:"Teaching & Academic",
      content:["Engineering","Math","Science","Socal Science","Teacher Training"]
    }
  ]

  const[val,setVal]=useState(true)

  const handleclick = ()=>{
    setVal(!val)
  }


  const Nav = useNavigate();

  const token = localStorage.getItem("token")
  const name = localStorage.getItem("name")

  // console.log(token , name);

  const logout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    Nav("/")
  }
  const email= localStorage.getItem("email");  //email token

  // search bar
  const [searchval,setsearchVal] = useState()

  const[searchdata,setsearchdata] = useState()


  const searcclean = ()=>{
    setsearchVal('')
    // console.log(searchdata);
    console.log(typeof(searchval));
    if(searchval){
      console.log(searchdata);
      Nav("/searchcomp", {state:{state:searchval,data:searchdata}})
    }
    else{
      toast.warn("Invalid Entry")
    }
    
  }
  

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/search?searchval=${searchval}`).then((res)=>{
      setsearchdata(res.data);
    }).catch((err)=>console.log("Search Api error" , err))
  },[searcclean])

  // cart number
  const[num,setNum] =useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/api/getcartdata").
    then((res)=>setNum(res.data)).catch((err)=>console.log("Cart error", err))
  },[num])

  const newNum = num?.filter(i=> i.proID == email)

  const[searchbtnval,setSearchbtnval] = useState(false)

  const searchbtnclick = ()=>{
    setSearchbtnval(!searchbtnval)
  }

  return (
    <div className='Navhead'>

      <div onClick={handleclick} className='menuicon'>
        <IoMdMenu/>
      </div>

      {/*logo col  */}
      <div onClick={()=>Nav('/')} className='logo' >
      <img src={logo} alt='Loading...' />
      </div>
      
      {/* category col */}
      <div className='category'>
      <p>Categories</p>
        <div className='categoryList'>
          <div className='innercategoryconatiner'>
          {
            category.map((item,index)=>{
              // if(item === subcategory.category)
              return(
                <div key={index} className='subcategorylist'>
                <p className='sublist'>
                  <NavLink to={`/course/${item}`} state={subcategory}>
                  {item}
                  </NavLink>
                </p>
                <LiaGreaterThanSolid className='greatericon'/>
                <div className='subcategory-InnerList'>
                  {
                    subcategory[index].content.map((item,subindex)=>{
                      return(
                        <p key={subindex}>
                          <NavLink to={`/course/${subcategory[index].category}/${item}`} state={subcategory} >
                            {item}
                          </NavLink>
                        </p>
                      )
                    })
                  }
                </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>

      {/* search bar col */}
      <div className='Navsearch'>
        <label htmlFor='serchbtn' className='navlabel' onClick={searcclean} ><CiSearch className='searchicon'/></label>
        <input id='serchbtn' type='text' name="search" value={searchval} placeholder='Search for anything' onChange={(e)=>setsearchVal(e.target.value)} />
      </div>


      {/* mobile search  */}
      <div className='mobilesearchicon'  onClick={searchbtnclick}>
        <CiSearch /> 
      </div>

      {
        searchbtnval ? 
        <div className='mobilesearchsection'>
          <div className='mobilesearch'>
          <label htmlFor='serchbtn' className='navlabel' onClick={()=>{searcclean(),searchbtnclick()}} ><CiSearch className='searchicon'/></label>
          <input id='serchbtn' type='text' name="search" value={searchval} placeholder='Search for anything' onChange={(e)=>e.target.value} />
          </div> 
        </div>
      : " "
      }

      
      {/* tech col */}
      <div className='navflex tech'>
      <div className='udemybussiness'>
        <p>Udemy Business</p>
        <div className='hang'></div>
        {/* hover block1 */}
        <div className='hoverBlock1' >
          <p>Get your team access to over 25,000 top Udemy courses, anytime, anywhere.</p>
          <div className='hoverBlock1-btn1'>Try Udemy Business</div>
        </div>

      </div>
      <div className='udemytech'>
        <p onClick={()=>Nav("/techudemy")}>Tech on Udemy</p>
        <div className='hang1'></div>
        {/* hover block2 */}
        <div className='hoverBlock2'>
          <p>Turn what you know into an opportunity and reach millions around the world.</p>
          <div className='hoverBlock1-btn1' onClick={()=>Nav("/techudemy")}>Learn More</div>
        </div>
      </div>
      </div>


      {/* cart */}
      <div className='cart' onClick={()=>Nav("/cart")}>
        <MdOutlineShoppingCart className='cartlogo'/><span className='cartnumber'>{newNum.length}</span>
      </div>

       {/* login sign col */}
      {
        token ? 
        <div className='afterloginshow loginshow'>
          {/* <FaRegHeart style={{fontSize:"20px"}}/> */}
          <p className='mylearning' onClick={()=>Nav("/mylearning")}>My Learning</p>

          <div className='dropshowhover'>

            <div className='logologin'>
              <p>{name.slice(0,1)}</p>
            </div>

            <div className="hangdroplogin">
              <div className='logindrop'>
                <div className='logindrop1'>
                <p className='logindrop1logo'>{name.slice(0,1)}</p>
                <div>
                <p className='logindrop1-namesection'>{name.slice(0,22)}</p>
                <p className='logindrop1-emailsection'>{`${email.slice(0,15)}...`}</p>
                </div>
                </div>
                <div className='logindrop2'>
                <p onClick={()=>Nav("/mylearning")}>My Learning</p>
                <p onClick={()=>Nav("/cart")}>My Cart</p>
                <p onClick={logout}>Logout</p>
                </div>
              </div>
            </div>

          </div>
          
        </div>
        :
        <div className='navflex navbtn'>
        <div className='navbtn signin'>
          <p onClick={()=>Nav('/login')}>Log in</p>
        </div>
        <div className='navbtn singup'>
          <p onClick={()=>Nav('signup')}>Sign up</p>
        </div>
        <div className='globebtn'>
          <IoGlobeOutline style={{fontSize:"23px",marginTop:"3px"}}/>
        </div>
      </div>
      }




      {/* sidebar mobile view */}

        {
          val ? " " 
          : 
            <div className="backgrounblur">

            <div className='sidebar'>
                {/* /close */}
                <div onClick={handleclick} className='close'>
                  <IoMdClose style={{fontSize:"25px"}}/>
                </div>

              {/* btn */}
                {
                  token ?
                  <div className='sidebarloginsection'>
                    <p className='sidelogo'>{name.slice(0,1)}</p>
                    <div className='sidebarloginsection1'>
                      <p className='sidelogoName'>{name}</p>
                      <p>{`${email.slice(0,15)}`}</p>
                      <div className='sidelogout'>
                      <p onClick={logout}>Log Out</p>
                      <p className='' onClick={()=>{Nav("/mylearning"),handleclick()}}>My Learning</p>
                      </div>
                    </div>
                  </div>
                  :<div className='sidebar-btn'>
                  <p onClick={()=>{
                    Nav("/login"),
                    handleclick()
                  } }>Log in</p>
                  <p onClick={()=>{
                    Nav("/signup"),
                    handleclick()
                  }}>Sign up</p>
                </div>
                }


                {/* all category */}

                <div className='sidebar-allcategory-container'>
                  <h3>All Categories</h3>

                  <div className='categoryList'>
                  <div className='innercategoryconatiner'>
                  {
                    category.map((item,index)=>{
                      // if(item === subcategory.category)
                      return(
                        <div key={index} className='subcategorylist'>
                        <p className='sublist'>
                          <NavLink to={`/course/${item}`} state={subcategory}>
                          {item}
                          </NavLink>
                        </p>
                        <LiaGreaterThanSolid className='greatericon'/>
                        <div className='subcategory-InnerList'>
                          {
                            subcategory[index].content.map((item,subindex)=>{
                              return(
                                <p key={subindex}>
                                  <NavLink to={`/course/${subcategory[index].category}/${item}`} state={subcategory} onClick={()=>handleclick()} >
                                    {item}
                                  </NavLink>
                                </p>
                              )
                            })
                          }
                        </div>
                        </div>
                      )
                    })
                  }
                  </div>
                </div>
                      
                </div>

                <div className='side-tech'>
                  <p className='side-tech-head'>More from Udemy</p>
                  <div className='side-conent'>
                    <p>Udemy Business</p>
                  </div>
                  <div className='side-conent'>
                    <p>Tech on Udemy</p>
                  </div>
                </div>

              </div>

            </div>
        }  


    </div>
  )
}

export default Navbar