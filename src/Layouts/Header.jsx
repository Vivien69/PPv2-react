import React, {Fragment} from 'react'
import  Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'

const Header = () => {
  return (
    <Fragment>

        <header role="banner">
            <Navbar />
        </header>
        
            <Carousel />

    </Fragment>
     
  )
}

export default Header
