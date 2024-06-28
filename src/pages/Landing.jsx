import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <>
      <div className="row mt-5 w-100 d-flex justify-content-center align-items-center">
            <div className="col-1 md-1"></div>
         <div className="col-md-5 p-5">
            <h4>Welcome to <span className='text-warning'>Media Player</span></h4>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci unde dolores accusantium id ad? At accusantium laboriosam fugit dolores maxime nihil nisi odio dignissimos repellat. Soluta unde commodi quos maiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime similique possimus qui, sunt mag  </p>
            <button className=' btn btn-warning mt-5 '><Link to={'/home'} style={{color:'white',textDecoration:'none'}}>Get Started</Link></button>
         </div>
         <div className="col-md-1"></div>
         <div className="col-md-5 d-flex justify-content-center align-items-center p-5" >
         <img src="https://i.gifer.com/8fvu.gif" alt="no image" style={{width:'400px', height:'400px'}} />
         </div>
         
         </div>
         <div className="row w-100 mt-4">
            <h4 className='mt-5 text-center mb-5'>Features</h4>
            <div className="col-md-1 me-md-5"></div>
            <div className="col-md-3 px-5 px-md-4 mt-3">
            <Card style={{ width: '80%' }} className='p-3'>
      <Card.Img variant="top" className='w-100' height={'180px'} src="https://i.pinimg.com/originals/3c/7c/3a/3c7c3aac69be33dbf1d190be0d2220b0.gif" />
      
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
            </div>
            <div className="col-md-3 px-5 px-md-4 mt-3">
            <Card style={{ width: '80%' }} className='p-3 '>
      <Card.Img variant="top" className='w-100' height={'180px'}  src="https://i.pinimg.com/originals/04/39/04/04390480a47fd53214311db4eed77f71.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
            </div>
            <div className="col-md-3 px-5 px-md-4 mt-3">
            <Card style={{ width: '80%' }} className='p-3'>
      <Card.Img variant="top" className='w-100' height={'180px'}  src="https://i.pinimg.com/originals/f2/cf/eb/f2cfeb090c47564d3d4f869d38ea8f6a.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
            </div>
            <div className="col-md-1"></div>
         </div>


         <div className="row w-100 mt-5 ms-1 ms-md-0 p-4 p-md-0">
              <div className="col-md-1"></div>
              <div className="col-md-9 border p-5 rounded md-5 m-5">
                <div className="row w-100">
                   <div className="col-md-6">
                    <h4 className='text-warning mt-3'>Simple Fast and Powerful</h4>
                    <p className='mt-4'><span className='fs-4'>Play Everything : </span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet ad accusantium perspiciatis aliquid aspernatur repellendus veritatis</p>
                    <p className='mt-4'><span className='fs-4'>Play Everything : </span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet ad accusantium perspiciatis aliquid aspernatur repellendus veritatis</p>
                    <p className='mt-4'><span className='fs-4'>Play Everything : </span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste amet ad accusantium perspiciatis aliquid aspernatur repellendus veritatis</p>
                   </div>
                   <div className="col-md-6">
                   <iframe width="100%" height="100%" src="https://www.youtube.com/embed/UPQZ4vuvW2s?si=0e92abO3s5caxs3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   </div>
                </div>
              </div>
              <div className="col-md-2"></div>
         </div>
    </>
  )
}

export default Landing