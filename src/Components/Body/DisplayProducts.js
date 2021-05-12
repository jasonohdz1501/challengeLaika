import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Product } from './Product'

export const DisplayProducts = () => {

  const [products, setProducts] = useState([])
  
  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const data = await axios.get('http://127.0.0.1:8000/api/products')
    const productsGet = data.data
    setProducts(productsGet)
  }

  return (
    <Container>
      <h2 className="titles--main ms-2 mt-4 mb-4">Productos de nuestra tienda</h2>
      <Row className="gx-3 gy-3">
        {
          products.map(item =>(
            <Col md={4}>
              <div key={item.id}>
                <Product product={item}/> 
              </div>   
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

