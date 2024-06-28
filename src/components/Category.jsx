import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VideoCard from './VideoCard'
import { AllCategoryApi, AvideoApi, addCategoryApi, deleteCategoryApi, updateCategoryApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Row,Col } from 'react-bootstrap'

function Category({setDragStatus,dragStatus}) {
  const [show, setShow] = useState(false);
const[CategoryName,setCategoryName]=useState("")
const [AllCategory,setAllCategory]=useState([])
const [addStatus,setAddStatus]=useState(false)
  const handleClose = () => {
    setShow(false);
    setCategoryName("")
  }
  const handleShow = () => setShow(true);

  const addCategory=async()=>{
    if(CategoryName){
      const reqBody={
        CategoryName,
        allVideo:[]
      }
      const result=await addCategoryApi(reqBody)
      
      if(result.status>=200&&result.status<300){
        setAddStatus(true)
        handleClose()
        toast.success('category added successfully')
      }
      else{
        console.log(result);
      }
    }
    else{
      toast.info('please add the category name')
    }
  }


const getAllCategory =async()=>{
  const result=await AllCategoryApi()
  console.log(result);
  if(result.status>=200&&result.status<300){
    setAllCategory(result.data)
    
  }
}
console.log(AllCategory);

const deleteCategory=async(id)=>{
  const result =await deleteCategoryApi(id)
  console.log(result);

getAllCategory()
}

const DragOver=(e)=>{
  e.preventDefault()
}

const VideoDrop=async (e,categoryId)=>{
  console.log(`category id is :${categoryId}`);
  //access the video id from view component
  const videoId=e.dataTransfer.getData("videoId")
  console.log("video id is",videoId);
  //get details from backend
  const {data}=await AvideoApi(videoId)
  console.log(data);

const  selectCategory=AllCategory.find((item)=>item.id==categoryId)

if(selectCategory.allVideo.find((item)=>item.id==data.id)){
  toast.warning('video already exist in category')
}
else{
  selectCategory.allVideo.push(data)
  await updateCategoryApi(categoryId,selectCategory)
  getAllCategory()

}



}


console.log(AllCategory);


const DragStart =(e,videoId,categoryId)=>{
  console.log(videoId);
  console.log(categoryId);
  let dataShare={
    videoId,categoryId
  }
  e.dataTransfer.setData("dataShared",JSON.stringify(dataShare))
}

useEffect(()=>{
  setAddStatus(false)
  getAllCategory()
  setDragStatus(false)
},[addStatus,dragStatus])

  return (
    <>
    <div className='mt-md-1 mt-1 w-100 p-4 d-flex ' >
        <button onClick={handleShow} className='btn btn-warning w-100'>Add new category <FontAwesomeIcon icon={faPlus} /></button>
    </div>

{AllCategory?.length>0?
AllCategory?.map((item)=>(
  <div className='mt-md-5 mt-2'  droppable onDragOver={(e)=>DragOver(e)} onDrop={(e)=>VideoDrop(e,item.id)} >
<div className='border border-secondary mt-3 rounded p-3 ms-3 ms-md-0' >
<div className='d-flex' >
<h6>{item.CategoryName}</h6>
<button className='btn btn-danger ms-auto' onClick={()=>deleteCategory(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
</div>
<Row>
  { item?.allVideo?.length>0?
  item?.allVideo?.map((videoItem)=>(
  <Col sm={12}  draggable onDragStart={(e)=>DragStart(e,videoItem.id,item.id)}>

<VideoCard displayVideo={videoItem}  isPresent={true} />

</Col>))
:null
}
</Row>
</div>
    </div>
))
    :null}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'> <FontAwesomeIcon icon={faPen} className='me-3' />Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border rounded p-3 border-secondary'>
<input type="text" placeholder='category name' className='form-control' onChange={(e)=>setCategoryName(e.target.value)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={addCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='dark' position='top-center' autoClose={2000}/>

    </>
  )
}

export default Category