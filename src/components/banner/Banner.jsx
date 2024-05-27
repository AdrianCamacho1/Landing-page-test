import React from 'react'
import { Employee } from './Employee'
import { Column } from './Column'
import { Slider } from './Slider'
import "./Banner.css"

export const Banner = () => {
  return (
    <section id="banner section" class="section">
      <Employee />
      <Column />
      <Slider />
    </section>
  )
}
