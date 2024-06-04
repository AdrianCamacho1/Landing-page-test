import React from 'react'
import { Employee } from './Employee'
import { Column } from './Column'

import "./Banner.css"

export const Banner = () => {
  return (
    <section id="banner section" className="section">
      <Employee />
      <Column />
    </section>
  );
};
