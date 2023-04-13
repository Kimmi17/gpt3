import React from 'react'

import {Footer, Blog, Possibility, WhatGPT3, Features, Header} from'./containers';
import {CTA, Brand, Navbar} from'./components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <did className="gradient__bg">
        <Navbar />
        <Header />
      </did>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
     
    </div>
  )
}

export default App