import InfoItem from '../../InfoItem'
import { Col, Row } from 'react-bootstrap'

const promoItems = [
  {id: 1, icon: 'shield-alt',textAfter: 'Compras seguros online'},
  {id: 2,icon: 'money-bill',textAfter: 'Pago Contra Entrega'},
  {id: 3, icon: 'truck', textAfter: 'Entregas el mismo día'}
]

const phoneItems = [
  {id: 4,textBefore: 'Llamanos',icon: 'phone',textAfter: '3009108496'},
]

const contactItems = [
  {id: 5,textBefore: 'Escríbenos'},
  {id: 6,icon: ['fab', 'youtube']},
  {id: 7,icon: ['fab', 'instagram']},
  {id: 8,icon: ['fab', 'facebook-f']}, 
]


export const PromoDetails = () => {
  return (
      <Row className="d-none d-md-flex  wrap--container--promo">
        <Col md={7} lg={6}>
          <div className="d-flex gap-4 flex-row justify-content-center">
            {
              promoItems.map(item => (
            <InfoItem  textBefore={item.textBefore} textAfter={item.textAfter} icon={item.icon} key={item.id} />
              ))
            }
          </div> 
        </Col>
        <Col md={2} lg={3}>
          <div className="d-flex gap-4 flex-row justify-content-center">
            {
              phoneItems.map(item => (
            <InfoItem  textBefore={item.textBefore} textAfter={item.textAfter} icon={item.icon} key={item.id}/>
              ))  
            }
          </div>
        </Col>
        <Col md={2} lg={3}>
          <div className="d-flex flex-row justify-content-center">
            {
              contactItems.map(item => (
            <InfoItem  textBefore={item.textBefore} textAfter={item.textAfter} icon={item.icon} key={item.id}/>
              ))  
            }
          </div>
        </Col>
      </Row>

  )
}

export default PromoDetails