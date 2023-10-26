import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    const style ={
        transition:'0.3s'
      }
    return (
        <div>

            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark" style={{
                padding: '26px'
            }}>
                <div className="container-fluid">
                    <a className="navbar-brand" to="#" style={style} data-aos="fade-right"><img src='https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg' alt='.'/> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  >
                        <span className="navbar-toggler-icon"  />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/">Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                            </li>

                            <li className="nav-item"> 
                                <NavLink className="nav-link" to="/contact">Contacts</NavLink>
                            </li>


                        </ul>

                    </div>
                    <div className='row' id='rowhead' data-aos="fade-left" data-aos-duration="8000" >
                        <div className='col-md-3'><i className="fa-brands fa-dribbble" />
                        </div>
                        <div className='col-md-9'>    <NavLink className='btn btn-warning' to='/contact'>contact me</NavLink>
                        </div>
                    </div>

                </div>


            </nav>
        </div>
    )
}

export default Header
