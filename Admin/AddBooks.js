import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './admin.css'

const AddBooks = () => {
    const [bookId, idchange] = useState("");
    const [bookName, namechange] = useState("");
    const [authorName, authorchange] = useState("");
    const [edition, editionchange] = useState("");
    const [publishers, publishersChange] = useState("");
    const [file, imagechange] = useState(null);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        // const empdata = { bookName, authorName, edition, bookId, file, publishers };
// console.log(empdata)
       const formData = new FormData();
        formData.append('file', file); 
        formData.append('publishers', publishers);
        formData.append('edition', edition);
        formData.append('authorName', authorName);
        formData.append('bookName', bookName);
        formData.append('bookId', bookId);

        fetch("http://localhost:8080/api/uplode", {
            method: "POST",
            body: formData // Don't set the content-type header
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            // Handle error
            console.log(error)
        });

    }
    return (
        <div className='addbooksec'>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit} enctype="multipart/form-data">

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2> Add Book</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Book ID</label>
                                            <input value={bookId} name='bookId' onChange={(e)=>idchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Book Name</label>
                                            <input required value={bookName} name='bookName' onChange={(e)=> namechange(e.target.value)} className="form-control"></input>
                                            {/* {name.length == 0 && validation && <span className="text-danger">Enter the name</span>} */}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Author Name</label>
                                            <input required value={authorName} name='authorname' onChange={(e) => authorchange(e.target.value)} className="form-control"></input>
                                            {/* {name.length == 0 && validation && <span className="text-danger">Enter the author name</span>} */}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Edition</label>
                                            <input value={edition} name='edition' onChange={(e) => editionchange(e.target.value)} className="form-control"></input>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Publisher</label>
                                                <input value={publishers} name='publishers' onChange={(e) => publishersChange(e.target.value)} className="form-control"></input>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Image</label>
                                            <input type="file"  onChange={e => imagechange(e.target.files[0])} className="form-control"></input>
                                        </div>

                                    </div>

                                    {/* <div className="col-lg-12">
                                        <div className="form-check">
                                        <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label  className="form-check-label">Is Active</label>
                                            
                                        </div> */}
                                    {/* </div> */}
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default AddBooks
