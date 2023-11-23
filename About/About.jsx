import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {             //Defines a functional component named About.
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>           {/*Renders an <img> element displaying the image imported earlier (aboutImg).*/}
            <img src={aboutImg} alt="" />
          </div>

          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About </h2>   {/*Utilizes various CSS classes (fs-17, fs-26, ls-1(letter specing) for styling purposes.*/}
            <p className='fs-17'>"A library management system is not just about organizing books; it's a gateway to knowledge. Efficiently managing resources, connecting readers to information, and fostering a community of learners. It's not merely a system; it's a portal to endless possibilities and the key to unlocking the doors of wisdom."
              <br /> <br /> "Within the quiet walls of a library management system, the symphony of knowledge orchestrates a dance between books and minds. Cataloging, lending, and returning are not mere transactions but threads weaving the fabric of enlightenment. In the realm of ones and zeros, the library management system becomes the guardian of stories, the curator of ideas, and the architect of intellectual exploration."
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
