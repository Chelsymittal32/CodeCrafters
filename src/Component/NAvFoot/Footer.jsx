import React from 'react'
import '../StyleComp/footer.css'
import { IoGlobeOutline } from "react-icons/io5";


const Footer = () => {
  const date = new Date()
  
  return (
    <div className='footersection'>

      {/* row1 */}

      <div className='footrow1'>
        <h3>Top companies choose <span>Udemy Business</span> to build in-demand career skills</h3>
        <div className='footrow1-row'>
          <img src='https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg' />
          <img src='https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg' />
          <img src='https://s.udemycdn.com/partner-logos/v4/box-light.svg' />
          <img src='https://s.udemycdn.com/partner-logos/v4/netapp-light.svg' />
          <img src='https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg' />
        </div>
      </div>

      {/* row 2 */}
      <div className='footerrow2'>
        <div className='innerrowsection2'>
            <div className='innerrowsection-line'>
              <p>Udemy Business</p>
              <p>Teach on Udemy</p>
              <p>Get the app</p>
              <p>About us</p>
              <p>Contact us</p>
            </div>
            <div className='innerrowsection-line'>
              <p>Careers</p>
              <p>Blog</p>
              <p>Help and Support</p>
              <p>Affiliate</p>
              <p>Investors</p>
            </div>
            <div className='innerrowsection-line'>
              <p>Terms</p>
              <p>Privacy policy</p>
              <p>Cookie settings</p>
              <p>Sitemap</p>
              <p>Accessibility statement</p>
            </div>
        </div>
        <div className='innerrowsection2-btn'>
          <h3>English<span><IoGlobeOutline/></span></h3>
        </div>
      </div>

      {/* row 3 */}

      <div className='footerrow3'>
        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" />
        <p>© {date.getFullYear()} CodeCreafters, Inc.</p>
      </div>

    </div>
  )
}

export default Footer