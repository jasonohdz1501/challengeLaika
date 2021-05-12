import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Product = ({product}) => {
  

  return (
  <Card className="text-center">
      <div className="d-flex justify-content-center">
      <Card.Img className="product--img"variant="top" src={product.img} />
      </div>
    <Card.Body>
      <Card.Title className="text--title--product">{product.productTitle}</Card.Title>
      <Card.Text className="text--title--price">
       $ {product.price }
        {
          product.offer ? 
          <div className="offer--annouce">{product.ammountOffer}</div> : <div></div>
        }
      </Card.Text>
      <div className="d-grid gap-2">
        <Button size="lg" variant="primary"><i><FontAwesomeIcon className="me-2" icon="cart-plus" /></i>Añadir al carrito</Button>
      </div>
    </Card.Body>
  </Card>
  )
}
