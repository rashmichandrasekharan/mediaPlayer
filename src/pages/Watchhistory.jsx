import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { deleteVideoFromHistory, getvideoFromHistoryApi } from '../services/allApi'

import { Table } from 'react-bootstrap'
function Watchhistory() {

const [videoHistory,setVideoHistory]=useState([])
const[deleteStatus,setDeleteStatus]=useState([])
  const getHistory=async()=>{
    const result=await getvideoFromHistoryApi()

    if(result.status>=200&&result.status<300){
      setVideoHistory(result.data)
    }
    
  }

const deleteHistory=async(id)=>{
  const result=await deleteVideoFromHistory(id)
  console.log(result);
  setDeleteStatus(result.data)
}

  console.log(videoHistory);
  useEffect(()=>{
    getHistory()
  },[deleteStatus])
  return (
    <>
         <div className='d-flex p-3 mt-5 w-100 mb-5'>
          <h5 className='ms-md-5'>Watch History</h5>
         <h5 className='ms-auto me-md-5'> <Link to={'/home'} style={{color:'white',textDecoration:'none'}}><span id="h"><FontAwesomeIcon icon={faArrowRight} className='me-2' /> Back to home </span> <FontAwesomeIcon icon={faHouse} className='ms-2' /></Link></h5>

         </div>

         <div className="row w-100 mt-5">

<div className="col-md-2"></div>
<div className="col-md-8" responsive>
  { videoHistory ?.length>0?
  <Table className='table table-bordered table-light'>
<thead>
  <tr>
    <th  className='text-center'>#</th>
    <th className='text-center'>Caption</th>
    <th className='text-center'>Url</th>
    <th className='text-center'>Time Stamp</th>
    <th className='text-center' >Action</th>
  </tr>
</thead>
<tbody>
 {
  videoHistory?.map((item,index)=>(
    <tr>
    <td>{index+1}</td>
    <td>{item?.caption}</td>
    <td><Link to={item?.url} target='_blank'>{item?.url}</Link></td>
    <td>{item?.timestamp}</td>
    <td className='text-center'><button className='btn btn-danger text-center ' onClick={()=>deleteHistory(item.id)}><FontAwesomeIcon icon={faTrash} /></button></td>
  </tr>
  ))
 }
</tbody>
  </Table>
  :
  <p className='text-warning fs-5'>No Watchhistory</p>}
</div>
<div className="col-md-2"></div>
         </div>
    </>
  )
}

export default Watchhistory