import React from 'react'
import logoPurple from '../../assets/logoPurple.png'
import InfoItem from '../InfoItem'

const socialMedia = [
  {id: 1,icon: ['fab', 'youtube']},
  {id: 2,icon: ['fab', 'instagram']},
  {id: 3,icon: ['fab', 'facebook-f']}, 
]

export const Branding = () => {
  return (
    <div className="wrapper--brand">
      <div className="d-flex justify-content-center">
        <img className="logo--footer" src={logoPurple} alt="logo laika"/>
      </div>
      <div className="pt-2 text-center text--social--footer">
        <p>Por más momentos<br></br> peludos</p>
        <p>Síguenos en:</p>
      </div>
      <div className="d-flex flex-row justify-content-center">
        {
          socialMedia.map(social=>(
            <div key={social.id}>
             <InfoItem icon={social.icon}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
