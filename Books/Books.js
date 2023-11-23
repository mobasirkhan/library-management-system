import React from 'react'
import './book.css'
import { Link, useNavigate } from 'react-router-dom'

const Books = (props) => {
    const navigate = useNavigate();
  const dataToSend=[]
  dataToSend.push(props.id)
  dataToSend.push(props.img)
  dataToSend.push(props.name)
  dataToSend.push(props.bookkid)
  dataToSend.push(props.edition)
  dataToSend.push(props.publishers)
  dataToSend.push(props.author)
  const Nextpage=(()=>{
    navigate('/readbook', { state: { data: dataToSend } });
    // console.log("object")
  })
    const imageSrc = `data:image/png;base64,${props.img}`;
  return (
    <>
      <div className="col sizebook"><div class="card" >
  <img src={imageSrc} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.author}</p>
    <button class="btn btn-primary" onClick={Nextpage}>View Books</button>
  </div>
</div></div>
    </>
  )
}

export default Books
