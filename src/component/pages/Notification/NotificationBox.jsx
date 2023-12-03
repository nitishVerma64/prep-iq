import { Close } from '@mui/icons-material'
import './notification.css'

const NotificationBox = ({name,message}) => {

  return (
    <div className="notification-main">
        <div className="heading-closebutton">
          <h3>{name}</h3>
          <button className='close-button'> <Close/> </button>
        </div>        
        <p>{message}</p>
    </div>
  )
}

export default NotificationBox