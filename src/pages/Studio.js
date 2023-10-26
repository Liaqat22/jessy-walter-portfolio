import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { data } from './ProjectData.js/Projectontent';

function Studio() {
  const { id } = useParams();
  const projectitem = data.find((p) => p.id === parseInt(id, 10));
  return (
    <div>


      <div className='container'>

        <div className='row mb-3' style={{ padding: ' 80px 0px' , display:'flex',alignItems:'center',justifyContent:'unset' }}>

          <div className='col-md-6 colport' >

            <h4 className='intro'>-Project {projectitem.projectNo}</h4>
            <h1 className='projecthiring'>{projectitem.projectName}</h1>
            <p className='discription'>{projectitem.singledescription}</p>

            <div className='row'>
              <div className='col'><i className="fa-solid fa-heart fa-xl mb-2" style={{
                color: "#64f4ab", fontSize: '22px',
                padding: '22px',
                borderRadius: '10px',
                cursor: 'pointer',
                border: '1px solid #64f4ab'
              }} /><span><h3 style={{ color: 'white' }}>Likes(50)</h3></span></div>
              <div className='col' style={{ color: "#64f4ab" }}><i className="fa-solid fa-share-nodes fa-xl mb-2" style={{
                color: "#64f4ab", fontSize: '22px',
                padding: '22px',
                borderRadius: '10px',
                cursor: 'pointer',
                border: '1px solid #64f4ab'
              }} /><span><h3 style={{ color: 'white' }}>Share</h3></span></div>
            </div>
            <div className='row mt-3'>
              <div className='col' ><h3 style={{ color: '#fecd1a' }}>Categories</h3> <h4 style={{ color: 'white' }}>App Design</h4> </div>
            </div>
            <div className='row mt-3'>
              <div className='col' ><h3 style={{ color: '#fecd1a' }}>Client</h3> <h4 style={{ color: 'white' }}>Company Name</h4> </div>
            </div>
          </div>

          <div className='col-md-5' >
            <div id='pimg'>
              <img className='pimg  seemore' src={projectitem.image} alt='-' />
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


    </div>
  )
}

export default Studio
