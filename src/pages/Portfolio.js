import React from 'react'
import { NavLink } from 'react-router-dom'
import { data } from './ProjectData.js/Projectontent';

function Portfolio() {
  const animationdown = "fade-down";
  const animationup = "fade-up";
  const style ={
    transition:'0.8s'
  }
  return (
    <div>
      
      <div className='container-fluid' style={{ backgroundColor: '#25262a' }}>
       {data.map((p)=>(
 <div className='row rows' style={{ padding: ' 80px 0px' , display:'flex',flexDirection: p.rowReverse }} key={p.id}>

 <div className='col-md-6 colport' >

   <h4 className='intro'>-Project {p.projectNo}</h4>
   <h1 className='projecthiring'>{p.projectName}</h1>
   <p className='discription' data-aos="fade-up">{p.description}</p>
   <div className='btun'><i className="fa-solid fa-arrow-right"
     style={{
       color: '#fecd1a', zIndex: '1'
     }} /><NavLink className='btn btn-secondary' to={`/studio/${p.id}`} data-aos="fade-left" style={style} > Read More</NavLink></div>
 </div>

 <div className='col-md-5' >
   <div id='pimg'>
     <img className='pimg' src={p.image} alt='-' data-aos={animationdown}
     />
   </div>

 </div>

</div>
       ))}

       


       





      </div>

    </div>
  )
}

export default Portfolio
