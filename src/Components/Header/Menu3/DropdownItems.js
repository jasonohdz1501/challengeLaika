import React from 'react';
import InfoItem from '../../InfoItem';

export const DropDownItems = ({menu, className}) => {
  return (
    <div className={className}>
      <div>
        <InfoItem textAfter={menu.name} icon={menu.icon}/>
      </div>
    </div>
  )
}



