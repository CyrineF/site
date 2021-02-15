import React from 'react'
import {CardDeck,Card,Button} from 'react-bootstrap' 
import gr from './Grpimage/gr.jfif'

function Grp() {
    return (
        <div>
              <CardDeck>
                  <Card>
                      <Card.Img variant="top" src={gr} />
                      <Card.Body>
                           <Card.Title>Shirt</Card.Title>
                           <Card.Text>
                           T-Shirt for all sizes available in all of our stores
                           </Card.Text>
                       </Card.Body>
                       <Button variant="primary">Buy Now</Button>
                   </Card>
                   <Card>
                     <Card.Img variant="top" src={gr} />
                          <Card.Body>
                             <Card.Title>Shirt</Card.Title>
                              <Card.Text>
                              T-Shirt for all sizes available in all of our stores
                             </Card.Text>
                         </Card.Body>
                        <Button variant="primary">Buy Now</Button>
                 </Card>
                 <Card>
                       <Card.Img variant="top" src={gr} />
                       <Card.Body>
                            <Card.Title>Shirt</Card.Title>
                            <Card.Text>
                            T-Shirt for all sizes available in all of our stores
                            </Card.Text>
                       </Card.Body>
                       <Button variant="primary">Buy Now</Button>
                   </Card>
                </CardDeck>
        </div>
    )
}

export default Grp
