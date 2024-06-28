import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Watchhistory from '../pages/Watchhistory'
function Footer() {
  return (
    <div>
        <div className="row w-100 mt-5 p-3">

            <div className="col-md-4 p-4 ms-md-5">
                <h5 className='text-warning '>Media-Player <FontAwesomeIcon icon={faVideo}  className='me-3'/></h5>
                <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quis repudiandae cupiditate ipsa dolorem iure reiciendis tempore temporibus earum alias delectus natus, odio ad in. Quis velit quos nam optio!</p>
            </div>
            <div className="col-md-2 p-4 justify-content-center d-md-flex">
                <div>
                    <h5>Links</h5>
                    <p className='mt-4'><Link to={'/'}>Landing page</Link></p>
                    <p><Link to={'/home'}>Home page</Link></p>
                    <p><Link to={'/Watchhistory'}>Watch History</Link></p>
                </div>
            </div>
            <div className="col-md-2 p-4">
                <h5>Guides</h5>
                <p className='mt-4'>React</p>
                <p>React Bootstrap</p>
                <p>BootsWatch</p>
            </div>
            <div className="col-md-3 p-4">
                 <h5>Contact Us</h5>
                 <div className="d-flex mt-4">
                   <input type="text" className='form-control' placeholder='Email Id' />
                   <button className='btn btn-warning ms-3'>Subscribe</button>
                 </div>
                 <div className="d-flex mt-4 justify-content-around">
                 <FontAwesomeIcon icon={faInstagram} size='2x1'/>
                 <FontAwesomeIcon icon={faFacebook} size='2x1' />
                 <FontAwesomeIcon icon={faTwitter} size='2x1'/>
                 <FontAwesomeIcon icon={faLinkedinIn} size='2x1'/>
                 </div>
            </div>
        </div>
        <div className="col-md-1"></div>
    </div>
  )
}

export default Footer