import React from 'react'
import Card from 'react-bootstrap/Card';

const Product = () => {
    const local = JSON.parse(localStorage.getItem('product'))
    return (
      <div className="container">
          <div className="row justify-content-center">
          {
              local.map(item => {
                  return(
                      <Card className='mt-4 ms-4'  style={{ width: '16rem' }}>
                      <Card.Img className='img' variant="top" src={item.productUrl} />
                      <Card.Body>
                      <Card.Title>{item.productName}</Card.Title>
                      <Card.Text>
                       {item.productPrice+' $'}
                      </Card.Text>
                      </Card.Body>
                      </Card>
                  )
              })
              
             }
          </div>
   
      </div>
    )
}

export default Product