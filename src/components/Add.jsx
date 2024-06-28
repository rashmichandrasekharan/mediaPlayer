import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setaddStatus}) {
  //create a state to hold data from input field
  
  const [video,setVideo]=useState({
    caption:"",
    image:"",
    url:""
  })

    const [show, setShow] = useState(false);

    const handleClose = () => {

      setShow(false)
      setVideo({
        caption:"",
        image:"",
        url:""
      })

    };
    console.log(video);
    const handleShow = () => setShow(true);

const validateLink=(e)=>{
  //console.log(typeof(e.target.value));
  console.log(e.target.value);
  const link=e.target.value
  if(link.endsWith('?feature=shared')){
    const ytkey=link.slice(-26,-15)
    let embedLink=`https://www.youtube.com/embed/${ytkey}`
    setVideo({...video,url:embedLink})
  }
  else if(link.startsWith('https://youtu.be')){
    const ytkey=link.slice(17,28)
    console.log(ytkey);
    let embedLink=`https://www.youtube.com/embed/${ytkey}`
    setVideo({...video,url:embedLink})
  }
  else{
    const ytkey=link.slice(-11)
    let embedLink=`https://www.youtube.com/embed/${ytkey}`
    setVideo({...video,url:embedLink})
  }
}



const handleUpload=async (e)=>{
  e.preventDefault()
  const {caption,image,url}=video
  if(!caption || !image || !url){
    toast.info('please fill the form completely')
    console.log(video);
  }
  else{
    const result= await addVideoApi(video)
    console.log(result);
    if(result.status>=200&&result.status<300){
      toast.success('video uploaded successflly')
      setaddStatus(result.data)
      handleClose()
    }
    else{
      toast.error('something went wrong')
      console.log(result);
      handleClose()
    }
  }
}
    
  return (
  
    <>
    <div className="d-flex align-items-center">

        <h5 >Upload <span id="h"> new video</span></h5>
        <button onClick={handleShow} className='btn mb-2'><FontAwesomeIcon icon={faCloudArrowUp} size='xl' /></button>
    </div>
   

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2'/>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>please fill the following details !</p>
            <form className='border p-3 rounded border-secondary'>
                   <input type="text" placeholder='video caption'  className='form-control' onChange={(e)=>setVideo({...video,caption:e.target.value})} />
                   <input type="text" placeholder='video image'  className='form-control mt-3' onChange={(e)=>setVideo({...video,image:e.target.value})} />
                   <input type="text" placeholder='video url' className='form-control mt-3' onChange={(e)=>validateLink(e)}/>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='dark' position='top-center' autoClose={2000}/>
    </>
  )
}

export default Add