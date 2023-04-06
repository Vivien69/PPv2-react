import React, {Fragment, useEffect} from 'react'
import Navbar from './Components/Navbar'
import Carousel from './Components/Carousel'
import { useLocation } from 'react-router-dom'

const Header = ({hidden, user}) => {

  const location = useLocation()
  location.pathname.includes('profil') ? hidden = true : hidden = false

  return (
    <Fragment>

        <header role="banner">
            <Navbar user={user}/>
        </header>
        
            <Carousel hidden={hidden} />
        
    </Fragment>
     
  )
}

export default Header
