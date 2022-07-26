import React  from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Index = () => {
    const local = JSON.parse(localStorage.getItem('product'))
  return (
    <div className="container">
        <div className="row justify-content-center">
        {
            local.slice(0,4).map(item => {
                return(
                    <Card className='mt-4 ms-4' style={{ width: '16rem' }}>
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
           <Link to='/products'><Button className='btn w-100 mb-3 mt-3'>Read More...</Button></Link>
        </div>
 
    </div>
  )
}

export default Index