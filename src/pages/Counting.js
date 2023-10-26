import React, { useState } from 'react'
import CountUp from 'react-countup'
import { NavLink } from 'react-router-dom'
import ScrollTrigger from 'react-scroll-trigger'

function Counting() {

   const [counton, setCounton] = useState(false)
  


  return (
    <div >
<ScrollTrigger onEnter={()=>setCounton(true)} >
      <div className='container'>
        <div className='row countmain'>
          <div className='col-md-3 counts countradius' data-aos="fade-up">
            <h1 className='counters' >{counton && <CountUp start={0} end={56} duration={3} delay={0}/>}</h1>
            <h1 className='text'>Happy Clients</h1>
          </div>
          <div className='col-md-3 counts' data-aos="fade-up">
            <h1 className='counters'>{counton && <CountUp start={0} end={87} duration={3} delay={0}/>}</h1>
            <h1 className='text'>Projects Done
            </h1></div>
          <div className='col-md-3 counts' data-aos="fade-up">
            <h1 className='counters'>{counton && <CountUp start={0} end={16} duration={3} delay={0}/>}</h1>
            <h1 className='text'>Awards Winning
            </h1></div>
          <div className='col-md-3 counts countradius2' data-aos="fade-up">
            <h1 className='counters'>{counton && <CountUp start={0} end={7} duration={3} delay={0}/>}</h1>
            <h1 className='text'>Years Experience
            </h1></div>

        </div>
      </div>
      </ScrollTrigger>






      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" style={{
                  backgroundColor: '#64f4ab'
                }} />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" style={{
                  backgroundColor: '#64f4ab'
                }} />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000} style={{ border: 'none' }}>
                  <div className='row' style={{ display: "flex", alignItems: "center", padding: '45px 0px' }}>
                    <div className='col-md-6' id='crslimg'>
                      <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/07/testi21.png" className='crslimg' alt="..." data-aos="zoom-in-up" />

                    </div>
                    <div className='col-md-6'><p className='imgtext'>
                      The  brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!</p>
                      <h3 className='amman'>Amman Payne</h3>
                      <h4 className='proffession'>CEO of Figma</h4></div>

                  </div>

                </div>


                <div className="carousel-item " data-bs-interval={10000} style={{ border: 'none' }}>
                  <div className='row ' style={{
                    display: "flex", alignItems: "center", padding: '45px 0px'
                  }} >
                    <div className='col-md-6' id='crslimg'>

                      <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/testimonials-img.jpg" className='crslimg' alt="..." data-aos="zoom-in-up" />

                    </div>
                    <div className='col-md-6'>
                      <p className='imgtext'>
                        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!</p>
                      <h3 className='amman'>Jared Warner</h3>
                      <h4 className='proffession'>CEO of Figma</h4>
                    </div>
                  </div>

                </div>

              </div>



            </div>


          </div>


        </div>
      </div>
      <div className='container endpart'>
        <div className='row' id='endpart' data-aos="fade-out" style={{ overflow: 'hidden' }}>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            <h1 className='endhead' data-aos="fade-up">Lets Work Together</h1>
            <p data-aos="fade-up">The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn</p>
            <NavLink className='btn btn-warning' to='/contact' data-aos="fade-up">contact me</NavLink>
          </div>
          <div className='col-md-2'></div>

        </div>
      </div>
    </div>
  )
}

export default Counting
