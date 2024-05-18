import React from 'react'
import '../StyleComp/Tech.css'

const Tech = () => {
  return (
    <div>
        <div className="techtopimg">
            <img src="https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg" />
            <div className="techtopinnerSection">
                <h1>Come teach with us</h1>
                <p>Become an instructor and change lives-including your own</p>
                <div className='innergetStarted'>Get started</div>
            </div>
        </div>

        {/* second section */}

        <div className='reasonsection'>
            <h1>So many reasons to start</h1>
            <div className="reasonsection-inner">
            <div className='reasonsection1'>
                <img src="https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg" />
                <h3>Teach your way</h3>
                <p>Publish the course you want, in the way you want, and always have control of your own content.</p>
            </div>
            <div className='reasonsection1'>
                <img src="https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg" />
                <h3>Inspire learners</h3>
                <p>Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
            </div>
            <div className='reasonsection1'>
                <img src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg" />
                <h3>Get rewarded</h3>
                <p>Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
            </div>
            </div>
        </div>

        {/* thired section */}

        <div className="thirdsection">
          <div className="count">
            <h1>62M</h1>
            <p>Students</p>
          </div>
          <div className="count">
            <h1>75+</h1>
            <p>Languages</p>
          </div>
          <div className="count">
            <h1>830M</h1>
            <p>Enrollments</p>
          </div>
          <div className="count">
            <h1>180+</h1>
            <p>Countries</p>
          </div>
          <div className="count">
            <h1>15,000+</h1>
            <p>Enterprise Customers</p>
          </div>
        </div>

        {/* how to begin section */}

        <div className="beginsection">

          <h1>How to begin</h1>
          <div className="beginsection1">
            <h3 className='h3'>Plan your curriculum</h3>
            <h3 >Record your video</h3>
            <h3>Launch your course</h3>
          </div>

          <div className='beginsection2' >
              <div className='beginsection2-col1'>
                <p>You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.</p>
                <p>The way that you teach — what you bring to it — is up to you.</p>
                <h4>How we help you</h4>
                <p>We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.</p>
              </div>

            <div>
              <img src="https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg" />
             </div>
          </div>
        </div>

        {/* fourth section */}

        <div className='fourthsection'>
          <img src="https://s.udemycdn.com/teaching/instructors/en/frank-1x-v2.jpg" />
          <div className='fourthsection1'>
            <p>“I'm proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”</p>
            <h6>Frank kane</h6>
            <span>Data Science & IT Certifications</span>
          </div>
        </div>

        {/* alone section */}

        <div className='sectionfifth'>
          <img  src="https://s.udemycdn.com/teaching/support-1-v3.jpg" />
          <div className='sectionfifth1'>
            <h1>You won’t have to do it alone</h1>
            <p>Our <b>Instructor Support Team</b> is here to answer your questions and review your test video, while our <b>Teaching Center</b> gives you plenty of resources to help you through the process. Plus, get the support of experienced instructors in our <b>online community</b>.</p>
            <span>Need more details before you start?Learn more.</span>
          </div>
          <img  src="https://s.udemycdn.com/teaching/support-2-2x-v3.jpg" />
        </div>

        {/* instructor section */}

        <div className='instructorsection'>
          <div className='instructorsection1'>
          <h1>Become an instructor today</h1>
          <p>Join one of the world's largest online learning marketplaces.</p>
          <div className='instructorsection2'>Get started</div>
          </div>
        </div>

    </div>
  )
}

export default Tech