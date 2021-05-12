import { Row, Col, Container } from 'react-bootstrap'
import React from 'react'
import brands from '../../consts/brands.js'
import { Brand } from './Brand.js'

export const DisplayBrands = () => {
  return (
    <Container>
      <h2 className="titles--main ms-2 mt-4 pb-4">Marcas destacadas</h2>
          <Row className="gx-4 gy-4 ">
            {
            brands.map(brand => (
              <Col key={brand.id} xs={4} md={3}>
                <div className="d-flex justify-content-center align-itmes-center" >
                <Brand brand={brand}/>
                </div>
              </Col>
            ))
            }  
          </Row>
    </Container>
  )
}