import React from 'react'
import Flickity from 'react-flickity-component'
import 'flickity/css/flickity.css';

import img1 from '../../Images/uploadsMarchands/120-1.png'
import img2 from '../../Images/uploadsMarchands/120-2.png'
import img3 from '../../Images/uploadsMarchands/120-3.png'
import img4 from '../../Images/uploadsMarchands/120-4.png'

const flickityOptions = {
    initialIndex: 2
}

function Carousel() {
  return (
    <div className='bg-gray-800 pt-6 pb-12 lg:pt-10 lg:pb-16 mb-8'>
     
      <Flickity
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      >
      
      <div className="ml-2 border-2 bg-white w-40 h-20 bg-auto bg-center bg-no-repeat rounded box-border" style={{ backgroundImage: "url("+img1+")" }}></div>
      <div className="ml-2 border-2 bg-white w-40 h-20 bg-auto bg-center bg-no-repeat rounded box-border" style={{ backgroundImage: "url("+img2+")" }}></div>
      <div className="ml-2 border-2 bg-white w-40 h-20 bg-auto bg-center bg-no-repeat rounded box-border" style={{ backgroundImage: "url("+img3+")" }}></div>
      <div className="ml-2 border-2 bg-white w-40 h-20 bg-auto bg-center bg-no-repeat rounded box-border" style={{ backgroundImage: "url("+img4+")" }}></div>
      <div className="ml-2 border-2 bg-white w-40 h-20 bg-auto bg-center bg-no-repeat rounded box-border" style={{ backgroundImage: "url("+img1+")" }}></div>
      <div className="ml-2 border-2 bg-white w-40 h-20 bg-auto bg-center bg-no-repeat rounded box-border" style={{ backgroundImage: "url("+img2+")" }}></div>
      <div className="ml-2 border-2 bg-white w-40 h-20 bg-auto bg-center bg-no-repeat rounded box-border" style={{ backgroundImage: "url("+img3+")" }}></div>
      <div className="ml-2 border-2 bg-white w-40 h-20 bg-auto bg-center bg-no-repeat rounded box-border" style={{ backgroundImage: "url("+img4+")" }}></div>
      
      </Flickity>
    </div>
    
  )
}

export default Carousel