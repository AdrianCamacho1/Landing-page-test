import React from 'react';
import "./designDev.css";

export const DesignDev = () => {
  return (
    <section id="design-dev" className='section'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className='services-design'>
            <h2 className='heading-anim'>Design</h2>

            <p className='text-all-anim'> Figma, Adobe Illustrator, Adobe Photoshop,
            Midjourney, Shutterstock, Freepik Premium</p>

            <div className="services-design__list">
              <div className="services-design__list-left">
                <ul className="text-all-anim">
                  <li>Web Design</li>
                  <li>UI and UX</li>
                  <li>Branding</li>
                  <li>App Design</li>
                  <li>Wireframes</li>
                  <li>Brand guides</li>
                </ul>
              </div>
              <div className="services-design__list-right">
                <ul className="text-all-anim">
                  <li>Business cards</li>
                  <li>Blog graphics</li>
                  <li>Digital ads</li>
                  <li>Icons</li>
                  <li>Infographics</li>
                  <li>Simply anything :</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="service-dev">
            <h2 className="heading-anim">Dev</h2>
            <div className="sevice-dev__offer">
              <span className="text-all-anim">Wordpress</span>
              <p className="text-all-anim">Visual Builders (Beaver Builder &amp; Elementor), Custom Theme and Plugin development, Custom Post Type, Custom Fields, WooCommerce, Any plugin integration</p>
            </div>
            <div className="sevice-dev__offer">
              <span className="text-all-anim">Pure Code</span>
              <p className="text-all-anim">HTML, CSS, SCSS, JavaScript, JQuery, AJAX, PHP, Laravel Framework, MySQL, Animations with AOS and GSAP</p>
            </div>
            <div className="sevice-dev__offer">
              <span className="text-all-anim">Webflow</span>
              <p className="text-all-anim">Creative interactive and animated websites</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};