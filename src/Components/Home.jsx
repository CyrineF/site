import React from 'react'
import Navb from './Navb'
import Carousell from './Car/Carousell'
import Hello from './Hello'
import Footer from './Footer'
import Grp from './Grpp/Grp'

function Home() {
    return (
        <div>
          <Navb/> 
          <Hello/>
          <Carousell/>
           <br/> 
          <Grp/>
           <Footer/>
        </div>
    )
}

export default Home
