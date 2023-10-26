import React from 'react'
import img from './pics/circle-png-15298.png'

function Profilepic() {
  return (
    <div>
      
      <div className='row'>
        <div className='col'  id='imgmain'>
            <div className='row dpicon1'>
                <div className='col 'style={{textAlign:'start'}}><i className="fa-solid fa-code dpicon"  data-aos="fade-right" /></div>
                <div className='col ' style={{textAlign:'right'}}><i className="fa-solid fa-blog dpicon iconposition"  data-aos="fade-left" /></div>
            </div>
        <img className='img' src='https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/hero-img.png' alt='.' data-aos="fade-up" data-aos-duration="12000" style={{transitionDelay:'1s'}}/>
            <img className='img1' src={img} alt='.' data-aos="zoom-in" />
           
            <div className='row dpicon2'>
                <div className='col'
><div ><i className="fa-solid fa-pen dpicon iconposition3 "  data-aos="fade-right" /></div></div>
                <div className='col colicon4'><i className="fa-solid fa-photo-film dpicon iconposition4"  data-aos="fade-left" /></div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Profilepic

