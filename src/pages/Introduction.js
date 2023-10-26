import React from 'react'
import { NavLink } from 'react-router-dom'
import Counting from './Counting'
import Profilepic from './Profilepic'
import { data } from './ProjectData.js/Projectontent';


function Introduction() {
  const animationdown = "fade-down";
  const animationup = "fade-up";

  const style = {
    transition: '0.9s'
  }
  return (
    <div>


      <div className='container-fluid containerintro mb-3' style={{ backgroundColor: '#25262a' }}>
        <div className='row' id='rowintro'>
          <div className='col-md-6 tablet' id='intro'>
            <h4 className='intro' data-aos="fade-down" style={{ transitionDelay: '0.2s' }}>-Introducing</h4>
            <h1 className='name' data-aos="fade-down" >Hello<br /> I'm Jessy Walter</h1>
            <p className='discription' data-aos="fade-right" data-aos-duration="8000">Since beginning my journey as a web developer nearby 7 years ago, I 've done remote work for agencies, consulted for startup, and collaborated with talented people to create responsive websites.</p>
            <NavLink className='btn btn-warning btnres' to='/contact' data-aos="fade-up" >contact me</NavLink>
          </div>
          <div className='col-md-5 introdp tablet'>

            <Profilepic />

          </div>

        </div>
      </div>


      <div className='container-fluid' style={{ backgroundColor: '25262a#', marginTop: '75px' }}>
        <div className='row' id='rowskills'>
          <div className='col-md-6 cardres' style={{ zIndex: '1' }}>
            <div className='cards'>
              <div className="card  mb-3 crd" data-aos="zoom-out-up">
                <div className="header"><i className="fa-sharp fa-solid fa-code" />



                </div>
                <div className="card-body">
                  <h5 className="card-title">Development</h5>
                  <p className="card-text">The technological revolution is changing aspect</p>
                </div>
              </div>
              <div className="card cardm  mb-3 crd" data-aos="zoom-out-up">
                <div className="header"><i className="fa-sharp fa-solid fa-blog" />

                </div>
                <div className="card-body">
                  <h3 className="card-title">Blogging</h3>

                  <p className="card-text">The technological revolution is changing aspect</p>
                </div>
              </div>
              <div className="card  mb-3 crd" data-aos="zoom-out-up" >
                <div className="header"><i className="fa-sharp fa-solid fa-pen" />

                </div>
                <div className="card-body" data-aos="zoom-out-up">
                  <h5 className="card-title">Content writer</h5>
                  <p className="card-text">The technological revolution is changing aspect.</p>
                </div>
              </div>
              <div className="card cardm  mb-3 crd" data-aos="zoom-out-up" >
                <div className="header"><i className="fa-sharp fa-solid fa-photo-film" />

                </div>
                <div className="card-body">
                  <h5 className="card-title">Photoshop</h5>
                  <p className="card-text">The technological revolution is changing aspect</p>
                </div>
              </div>

            </div>

          </div>
          <div className='col-md-6' id='skillscol' data-aos="fade-up"  >
            <h4 className='intro'>-My Skills</h4>
            <h1 className='projecthiring'>Why Hire Me For Next Project?</h1>
            <p className='discription'>As an experienced web developer, I possess a strong command of essential programming languages, including HTML, CSS, and JavaScript, and I am well-versed in server-side languages such as  Node.js. My front-end development skills encompass the use of modern frameworks like React, ensuring the creation of dynamic and interactive user interfaces. Additionally, I am adept at responsive web design, ensuring seamless functionality across various devices and browsers.</p>
            <button className='btn btn-warning btnres' >Download CV</button>

          </div>
        </div>



      </div>

      <div className='container-fluid' style={{ backgroundColor: '#25262a', marginTop: '75px' }}>
        {data.slice(0, 3).map((p) => (

          <div className='row rows' style={{ padding: ' 80px 0px', display: 'flex', flexDirection: p.rowReverse }}>

            <div className='col-md-6 colport ' >

              <h4 className='intro'>-Project {p.projectNo}</h4>
              <h1 className='projecthiring'>{p.projectName}</h1>
              <p className='discription' data-aos="fade-up">{p.description}</p>
              <div className='btun'><i className=" fa-solid fa-arrow-right"
                style={{
                  color: '#fecd1a', zIndex: '1'
                }} /><NavLink className='btn btn-secondary ' to={`/studio/${p.id}`} data-aos="fade-left" style={style} > Read More</NavLink></div>
            </div>

            <div className='col-md-5 '>


              <div id='pimg'>
                <div data-aos={animationdown}  > <img className='pimg' src={p.image} alt='-' data-aos=" zoom-in-right" data-aos-duration="8000"
                />
                </div>
              </div>

            </div>

          </div>

        ))}




        <div className='d-flex justify-content-center pb-3 '>
          <NavLink className='btn btn-warning m-3 viewall' to='/portfolio'>View All</NavLink>

        </div>


      </div>

      <Counting />

    </div>
  )
}

export default Introduction
