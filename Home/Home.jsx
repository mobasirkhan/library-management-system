import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Books from '../../Components/Books/Books';
import './home.css'
import Navbar from '../../Components/Navbar/Navbar';


const Home = () => {
  const [data,setData]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual API endpoint
        const response = await fetch('http://localhost:8080/api/Content');
        const Data = await response.json();

        // Step 4: Update state with the received data
        setData(Data);
        console.log(Data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke the fetchData function
  },[]);

  
  const loops=data.map(item => (
    <Books img={ item.img} name={item.bookName} id={item.id} bookkid={item.bookId} edition={item.edition} publishers={item.publishers} author={item.authorName} />
  ))
  return (
    <main>
      <Navbar/>
        <Header />
        <div className="home_books">
          {loops}
        </div>
        <Outlet />
    </main>
  )
}

export default Home
