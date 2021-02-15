import React from 'react'
import {Carousel} from 'react-bootstrap'
import ej1 from './Image/ej1.jpg'
import ej2 from './Image/ej2.jpg'
import ej3 from './Image/ej3.jfif'


function Carousell() {
    return (
        <div>
            <Carousel>
               <Carousel.Item interval={1000}>
                  <img
                     className="d-block w-100"
                     src={ej1}
                     alt="First slide"
                   />
                    <Carousel.Caption>
                         <h3>Welcome To Our Clothes Store</h3>
                         <p>We provide have the top clothing quality out there</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                      <img
                         className="d-block w-100"
                         src={ej2}
                         alt="Third slide"
                       />
                    <Carousel.Caption>
                         <h3>Here we Have clothes for Men</h3>
                         <p>All Men wear are available in our store and you can shippable them everywhere</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                   <img
                      className="d-block w-100"
                      src={ej3}
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h3>As well for Women</h3>
                      <p>Find your unique style</p>
                </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
        </div>
    )
}

export default Carousell
