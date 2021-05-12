import React from 'react'



export const Links = ({data}) => {
  return (
    <div>
      
        {
          data.map(link =>(
            <ul className="list-group list-group-flush" key={link.id}>
            <li className="list-group-item">{link.linkRef}</li>
            </ul>
          ))
        }
     
    </div>
  )
}
