import React from 'react'
import { Col, Row } from 'react-bootstrap'
import InfoItem from '../InfoItem'

const data = [
  {
    id: 1,  
    name: 'Alimento',
    icon: 'bone',
  },
  {
    id: 2,
    name: 'Snacks',
    icon: 'drumstick-bite'
  },
  {
    id: 3,
    name: 'Farmapet',
    icon: 'band-aid'
  },
  {
    id: 4,
    name: 'Cuidado e Higiene',
    icon: 'shower'
  },
  {
    id: 5,
    name: 'Juguetes',
    icon: 'basketball-ball'
  },
  {
    id: 6,
    name: 'Accesorios',
    icon: 'paw'
  },
  {
    id: 7,
    name: 'Para PetLovers',
    icon: 'dog'
  },
]

export const DisplayCat = () => {
  return (
    <div>
      <h2 className="titles--main mb-4">Categoría</h2>
     <Row className="mt-2 gx-2 gy-2 d-flex align-items-center justify-content-center">
      {
          data.map(item => (
            <Col key={item.id} xs={4} md={3}>
              <div className="d-flex justify-content-center align-items-center" key={item.id}>
                <button className="category--items">
                  <span className="category--text--button">
                  <InfoItem textAfter={item.name} icon={item.icon} className="category--icon--format"/>
                  </span>
                </button>
              </div>
            </Col>
          ))
        }
     </Row>
    </div>
  )
}
