import React from 'react'
import {Card, CardDeck , Button} from 'react-bootstrap'
import Footer from '../Footer'
import Navb from '../Navb'
import fe from './fe.jpg'
import fee from './fee.jpg'


function Women() {
    return (
        <div>
            <Navb/>
            <h1 float='Center'>  Women Clothing </h1>

            <img  
               src={fe}
               width="50%"
                
            /> 
            <br/> 

            <CardDeck>
               <Card>
                   <Card.Img variant="top" src={fee} />
                    <Card.Body>
                      <Card.Title>T-Shirt</Card.Title>
                       <Card.Text>
                       T-Shirt for all sizes
                       </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Buy Now</Button>
                </Card>
                <Card>
                   <Card.Img variant="top" src={fee} />
                    <Card.Body>
                      <Card.Title>T-Shirt</Card.Title>
                       <Card.Text>
                       T-Shirt for all sizes
                       </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Buy Now</Button>
                </Card>
                <Card>
                   <Card.Img variant="top" src={fee} />
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
                   <Card.Img variant="top" src={fee} />
                    <Card.Body>
                      <Card.Title>T-Shirt</Card.Title>
                       <Card.Text>
                       T-Shirt for all sizes
                       </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Buy Now</Button>
                </Card>
                <Card>
                   <Card.Img variant="top" src={fee} />
                    <Card.Body>
                      <Card.Title>T-Shirt</Card.Title>
                       <Card.Text>
                       T-Shirt for all sizes
                       </Card.Text>
                    </Card.Body>
                    <Button variant="primary">Buy Now</Button>
                </Card>
                <Card>
                   <Card.Img variant="top" src={fee} />
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

export default Women