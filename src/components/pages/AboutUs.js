import React from 'react'
import '../../assets/styles/pagesStyle/aboutus.css'
import SamimAzimi from '../../assets/images/Logo.jpg'
import {RiFacebookCircleLine} from 'react-icons/ri'
import {RxTwitterLogo} from 'react-icons/rx'
import {FiGithub} from 'react-icons/fi'
import {HiGlobeAlt} from 'react-icons/hi'  
import {TbHistoryToggle} from 'react-icons/tb'
import {GiStairsGoal} from 'react-icons/gi'
import {RiTeamLine} from 'react-icons/ri'
function AboutUs() {
  return (
    <main className='aboutusMain'>  
    <section class="about-section">
      <div className='storySection'>
        <div>
      <h2 className='aboutus_heading'><TbHistoryToggle/> our Story </h2>
      <p className='aboutus_Para'>we are here , a technology-driven consultancy firm that offers a wide range of services to help individuals and businesses achieve their goals in digital market. Our team consists of experts in different fields who are passionate about providing innovative solutions to our clients.</p>

        </div>
     <div>
      <h2 className='aboutus_heading'><GiStairsGoal/> Our Mission</h2>
      <p className='aboutus_Para'>At Park Tech & Consultancy, our mission is to provide high-quality services that exceed our clients' expectations. We strive to establish long-term relationships with our clients based on trust, respect, and mutual understanding.</p>

     </div>
      </div>
   
      <h2 className='aboutus_heading'><RiTeamLine/> Our Team</h2>
      <p className='aboutus_Para'>Meet the talented individuals who make our customer experience great and seamless</p>
      
      <div className='teamMember'>
      <section className='memberSection'>
        <h3>Rabi Nazari</h3>
        <figure className='teamPhoto'>
          <img src="https://scontent.ftas3-1.fna.fbcdn.net/v/t39.30808-6/332084878_119144597771555_5872256013638092605_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=mRUKWXI3xgoAX-YMKLr&_nc_ht=scontent.ftas3-1.fna&oh=00_AfCbitQ4GNWkAjNZCmcf2ol3r5EViS1hx77m4hNtgXeSgQ&oe=64693C81"
           alt="Rabi Nazari , Company Founder Portrait"/>
        </figure>
        <p>CEO (Cheif Executive Officer)</p>
     
          <ul className='memeberSocialLink'>
            <li> <a href="https://www.facebook.com/Rabiullahn" target="_blank" rel="noreferrer"><RiFacebookCircleLine/></a></li>
            {/* <li> <a href="https://facebook.com/samim.elite" target="_blank">Twitter</a></li> */}
          </ul>
      
      </section>
      
      <section className='memberSection'>
        <h3>Tamim Safi </h3>
        <figure className='teamPhoto'>
          <img src="https://scontent.ftas3-2.fna.fbcdn.net/v/t39.30808-6/325770384_3383352481949818_8119827273424099007_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aG2JoshDY1UAX-Xxsb1&_nc_ht=scontent.ftas3-2.fna&oh=00_AfCJhdP_6KxpTiXSJNvKFN8ZNUiM5ZS5_cTp4Ib9on1ifA&oe=6468EFD9"
           alt="Tamim Safi Portrait"/>
        </figure>
        <p>Network Infrastracture Specialist</p>
      
          <ul className='memeberSocialLink'>
            <li> <a href="https://www.facebook.com/alihakimi1193" target="_blank" rel="noreferrer"><RiFacebookCircleLine/></a></li>
            <li> <a href="https://beacons.ai/alihakimi" target="_blank" rel="noreferrer"><HiGlobeAlt/></a></li>
          </ul>
       
      </section>
      <section className='memberSection'>
        <h3>Sayed Kamal Hashimi</h3>
        <figure className='teamPhoto'>
          <img src="https://scontent.ftas3-1.fna.fbcdn.net/v/t31.18172-8/18216587_1380841495316133_2109322295611447686_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=CyadziuITKEAX-f0-tN&_nc_ht=scontent.ftas3-1.fna&oh=00_AfDNPodG7YJu992gQ8864vJlwDDBfbKDc4iMD-rsS2Z6ow&oe=648B02AA" alt=" Company accouting & Representative Portrait "/>
        </figure>
        <p>Representative & Accounting Specialist</p>
      
          <ul className='memeberSocialLink'>
            <li> <a href="https://www.facebook.com/sayed.hash.5" target="_blank" rel="noreferrer"><RiFacebookCircleLine/></a></li>
            {/* <li> <a href="https://beacons.ai/alihakimi" target="_blank" rel="noreferrer">Portfolio</a></li> */}
          </ul>
      
      </section>
      <section className='memberSection'>
        <h3>Shafiq Nazari</h3>
        <figure className='teamPhoto'>
          <img src={SamimAzimi} alt="Scholarship Manager Portrait"/>
        </figure>
        <p>Scholarship Manager</p>
     
          <ul className='memeberSocialLink'>
            <li> <a href="https://facebook.com/samim.elite" target="_blank" rel="noreferrer"><RiFacebookCircleLine /></a></li>
            <li> <a href="https://facebook.com/samim.elite" target="_blank" rel="noreferrer"><RxTwitterLogo /></a></li>
           
            
          </ul>
       
      </section>
      <section className='memberSection'>
        <h3>Samim Azimi</h3>
        <figure className='teamPhoto'>
          <img src="https://avatars.githubusercontent.com/u/52883561?v=4" alt="Samim Azimi portrait"/>
        </figure>
        <p>Software Engineer</p>
      
          <ul className='memeberSocialLink'>
            <li> <a href="https://twitter.com/SamimAzimi1" target="_blank" rel="noreferrer"><FiGithub/></a></li>
            <li> <a href="https://github.com/SamimAzimi" target="_blank" rel="noreferrer"><RxTwitterLogo/></a></li>
            <li> <a href="https://samazimi.netlify.app" target="_blank" rel="noreferrer"><HiGlobeAlt /></a></li>
          </ul>
        
      </section>
      </div>
    </section>
  </main>
  )
}

export default AboutUs