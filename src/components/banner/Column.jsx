import React from 'react'
import "./Column.css"

export const Column = () => {
  return (
    <div id="banner_section" className="banner-col">
      <h1>An Agency With Unlimited Possibilities</h1>
      <p>Get Unlimited Graphic Design and Web Development for a Fixed Monthly Rate</p>
      <div className='banner-col-btn'>
        <a className='button-magnetic btn-purple' href='https://google.com'>
          <div className='button'>
            <div className='text'>
              Schedule a meeting
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
