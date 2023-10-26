import React from 'react'

function Footer() {
    return (
        <div>
            {/* <div className='' >
        <h3 className='text-center p-3 text-white'>All Rights are Reserved &copy; My Portfolio</h3>
      </div> */}
            <div className='bg-dark footer text-white' >
                <div className='container-fluid '>
                    <div className='row' id='rowfooter'>
                        <div className='col-md-2'>
                            <img src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/logo-header.svg" alt='logo' />
                        </div>
                        <div className='col-md-6' style={{ margin : '13px 0px'}}>
                            <small >© 2023 Freelancer - Phlox Elementor WordPress Theme. All rights reserved.</small>
                        </div>
                        <div className='col-md-4'>
                            <div className='d-flex justify-content-between'>

                                <i className="fa-brands fa-twitch" />
                                <i className="fa-brands fa-linkedin" />
                                <i className="fa-brands fa-instagram" />
                                <i className="fa-brands fa-behance" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
