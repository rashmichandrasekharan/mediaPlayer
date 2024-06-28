import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'
function Home() {
  //we created a state , pass the state to view that is addStatus and pass the state change function to add that is setaddStatus
  const [addStatus,setaddStatus]=useState([])
  const [dragStatus,setDragStatus]=useState(false)
  return (
    <>
      <div className="d-flex mt-5 p-4">
        <Add setaddStatus={setaddStatus}/>
        <h5 className='ms-auto'><Link style={{textDecoration:'none',color:'white'}} to={'/watchhistory'}><span id="h">Watch History </span> <FontAwesomeIcon icon={faClockRotateLeft}/> </Link></h5>
      </div>
      <div className="row w-100">
<div className="col-md-9">
  <h5>All Videos</h5>
  <View addStatus={addStatus} setDragStatus={setDragStatus}/>
</div>
<div className="col-md-3 ps-3">
  <Category dragStatus={dragStatus} setDragStatus={setDragStatus}/>
</div>
      </div>
    </>
  )
}

export default Home