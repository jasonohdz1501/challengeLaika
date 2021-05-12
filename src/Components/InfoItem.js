import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoItem = ({icon, textBefore, textAfter,className}) => {
  return (
      <div className ="gap-2 mb-0 d-flex justify-content-center">
        <p className ="mb-0">{textBefore}</p>
        <i><FontAwesomeIcon className={className} icon={icon} /></i>
        <p className ="mb-0">{textAfter}</p>
      </div>
  )
} 

export default InfoItem