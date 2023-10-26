import React from 'react'
import Header from './Header'
import Footer from './Footer'


function Layout({children}) {
  return (
    <div>
<Header/>

<div style={{minHeight : '80vh'}}>
<main>
    {children}
</main>
</div>

<Footer/>

    </div>
  )
}

export default Layout
