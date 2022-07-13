import icon_perfil from '../../Assets/img/notification_icon.svg'
import './style.css'
function NotificationButton(){ 
    return (
            <div className="dsmeta-red-btn">
                <img src={icon_perfil} alt="Notificar" />
            </div>
     )
}
export default NotificationButton
