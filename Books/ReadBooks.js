import React from 'react'
import { useLocation } from 'react-router-dom';

const ReadBooks = () => {
    const location = useLocation();
    const receivedData = location.state?.data || 'No data received';
    const [id,img,name,bookkid,edition,publishers,author]=receivedData
    console.log(id,img,name,bookkid,edition,publishers,author)
    const imageSrc = `data:image/png;base64,${img}`;
  return (
    <>
      <h1 className='text-center'>Library Management System</h1>
    <br/>   <br/>  <br/>

    <div class="container text-center">
  <div class="row">
    <div class="col"> <div class="card">
    <img src={imageSrc} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{name}</h5>
      <p class="card-text">{author}</p>
      <a href="#" class="btn btn-primary">Issue Book</a>   <br/>
      <br/>   <br/>
      <a href="#" class="btn btn-primary">Return Book</a>

    </div>
  </div></div>
   
    

  </div>
</div>
    </>
  )
}

export default ReadBooks
