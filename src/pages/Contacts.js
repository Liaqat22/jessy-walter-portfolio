import React from 'react'

function Contacts() {
  return (
    <div>

      <div className='container-fluid contdiv'>
        <div className='row controw'>
          <div className='col-md-6 contcol' style={{overflow:'hidden'}}>
            <h4 className='intro'>-Contact Me</h4>
            <h1 className='projecthiring'>Get In Touch With Me</h1>
            <p className='discription'data-aos="fade-right">I'm excited to discuss your web development needs and explore how I can contribute to your projects. Whether you're looking to build a cutting-edge website, enhance your web application's performance, or need assistance with any web development task, I'm here to help!</p>
            <div className='row contact'data-aos="fade-left">
              <div className='col-md-3'>
                <i className="fa-sharp fa-solid fa-phone-volume icon mb-3" />
              </div>
              <div className='col-md-5'>
                <h3 style={{ color: 'white' }}><b>Phone</b></h3>

                <h5 className='num'>+99 (0) 101 0000 888
</h5>
                <h5 className='num'>+99 (0) 101 0000 888
</h5>
              </div>

            </div>
            <div className='row contact'data-aos="fade-left" >
              <div className='col-md-3'>
                <i className="fa-sharp fa-solid fa-envelope icon mb-3" />
              </div>
              <div className='col-md-5'>
                <h3 style={{ color: 'white' }}><b>Email</b></h3>

                <h5 className='num'>Info@yourdomain.net</h5>
                <h5 className='num'>Info@yourdomain.com
</h5>
              </div>

            </div>
          </div>
          <div className='col-md-6 ' >
<div className='contdiv1' >
  <form data-aos="fade-up" >
            <div className="row" >
              <div className="col-md-6 mt-2">
                <input type="text" className="form-control " placeholder="Full name" aria-label="First name"  required style={{color:"white"}}/>
              </div>
              <div className="col-md-6 mt-2">
                <input type="email" className="form-control" placeholder=" email" required aria-label="Last name"style={{color:"white"}} />
              </div>
              <div className="mt-3">
              <textarea className="form-control " id="exampleFormControlTextarea1" required placeholder="Message" rows={8} defaultValue={""} style={{color:"white"}}/>
            </div>

            </div>
            <button className='btn btn-warning mt-3' type='submit' >Send to me</button>
            </form>
           

            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
