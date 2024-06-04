import React from 'react'

import dude from "../../assets/dude.png"
import Rick from "../../assets/Rick.png"
import Morty from "../../assets/Morty.png"

import "./Employee.css"

export const Employee = () => {
  return (
    <section id="banner_section" class="section">
      <div className='inkyy-employee'>
        <div className='inkyy-employee_all inkyy-employee__1 ' >
          <div className='inkyy-employee_all--image'>
            <div className='button-magnetic img-anim'>
                <div className='button' >
                  <img className="text" src={dude} alt="junior" />
                </div>
            </div>
          </div>
                <h3>Alberto C</h3>
                <span>Front End Developer</span>
        </div>
        <div class="inkyy-employee__all inkyy-employee__2" >
          <div class="inkyy-employee__all--image">
            <div class="button-magnetic img-anim-2" >
              <div class="button2">
                <img className='text' src={Rick} alt='Rick' />
              </div>
            </div>
          </div>
            <h3>AC.</h3>
            <span>Web &amp; UI Designer</span>
        </div>
        <div class="inkyy-employee__all inkyy-employee__3" >
          <div class="inkyy-employee__all--image">
            <div class="button-magnetic img-anim-3" >
              <div class="button3">
              <img className='text' src={Morty} alt='morty' />
              </div>
            </div>
          </div>
            <h3>Corn.</h3>
            <span>Executive CEO &amp;  SuperHero</span>
        </div>
      </div>
    </section>
);
};
