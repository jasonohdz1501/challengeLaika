import React from 'react'
import Img from '../Img'
import coverMain from '../../assets/coverMain.png'

export const CoverHero = () => {
  return (
      <div className="mt-2">
      <Img className= "img-fluid cover--img" src={coverMain} />
    </div>
  )
}
