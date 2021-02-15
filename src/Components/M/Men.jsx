import React from 'react'
import tenue from './tenue.jpg'
import tn from './tn.jpg'
import {Card, CardDeck , Button} from 'react-bootstrap'
import Navb from '../Navb'
import Footer from '../Footer'


function Men() {
    return (
        <div>
            <Navb/>
            <h1 float='Center'>  Men Clothing </h1>

            <img  
               height="50%"
               width="80%"
               src={tenue} 
               margin-bottom = "50px"
            /> 

            <CardDeck>
               <Card>
                   <Card.Img variant="top" src={tn} />
                    <Card.Body>
                      <Card.Title>T-Shirt</Card.Title>
                       <Card.Text>
                       T-Shirt for all sizes
                       </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Buy Now</Button>
                </Card>
                <Card>
                   <Card.Img variant="top" src={tn} />
                    <Card.Body>
                      <Card.Title>T-Shirt</Card.Title>
                       <Card.Text>
                       T-Shirt for all sizes
                       </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Buy Now</Button>
                </Card>
                <Card>
                   <Card.Img variant="top" src={tn} />
                    <Card.Body>
                      <Card.Title>T-Shirt</Card.Title>
                       <Card.Text>
                       T-Shirt for all sizes
                       </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Buy Now</Button>
                </Card>
            </CardDeck>
            <br/>
            <CardDeck>
                <Card>
                   <Card.Img variant="top" src={tn} />
                    <Card.Body>
                      <Card.Title>T-Shirt</Card.Title>
                       <Card.Text>
                       T-Shirt for all sizes
                       </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Buy Now</Button>
                </Card>
                <Card>
                   <Card.Img variant="top" src={tn} />
                    <Card.Body>
                      <Card.Title>T-Shirt</Card.Title>
                       <Card.Text>
                       T-Shirt for all sizes
                       </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Buy Now</Button>
                </Card>
                <Card>
                   <Card.Img variant="top" src={tn} />
                    <Card.Body>
                      <Card.Title>T-Shirt</Card.Title>
                       <Card.Text>
                       T-Shirt for all sizes
                       </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Buy Now</Button>
                </Card>
            </CardDeck>
            <Footer/>
        
        </div>
    )
}

export default Men
