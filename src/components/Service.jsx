import React from 'react'
import Software from '../assets/software-application.png'
import Delivery from '../assets/delivery.png'
import Crown from '../assets/crown.png'


export const Service = () => {


  return (
    <div className='section r-3'>
        <div className = 'row'>
            <div className='col-12 col-md-4'>
                <div className='service-col__single'>
                    <div className='services-col__single--top'>
                        <img src={Software} alt='' />
                        <h3>Unlimited Service</h3>
                    </div>
                    <div className='separator'></div>
                    <div className='services-col__single--bottom'>
                        <p className='text-all-anim'>Subscribe to a plan and request as many designs as you like for a flat monthly fee.</p>
                    </div>
                </div>
            </div>
            <div className='col 12 col-md-4'>
                <div className='service-col__single'>
                    <div className='services-col__single--top'>
                        <img src={Delivery} alt='' />
                        <h3>Fast Delivery</h3>
                    </div>
                    <div className='separator'></div>
                    <div className='services-col__single--bottom'>
                        <p className='text-all-anim'>We’ll complete your task in approximately one to two business days.</p>
                    </div>
                </div>
            </div>
            <div className='col 12 col-md-4'>
                <div className='service-col__single'>
                    <div className='services-col__single--top'>
                        <img src={Crown} alt='' />
                        <h3>Superb Quality</h3>
                    </div>
                    <div className='separator'></div>
                    <div className='services-col__single--bottom'>
                        <p className='text-all-anim'>We'll do whatever it takes to meet your requirements until you are 100% satisfied.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
