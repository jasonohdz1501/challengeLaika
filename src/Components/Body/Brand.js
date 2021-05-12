import React from 'react'
import Img from '../Img'


export const Brand = ({brand}) => {
  return (
    <div className="wraper-brand-img d-flex align-items-center justify-content-center">
      <Img className ="brand--img" src={brand.img} />
    </div>
  )
}
