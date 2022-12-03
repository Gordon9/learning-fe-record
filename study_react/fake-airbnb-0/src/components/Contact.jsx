import '../Contact.css';
import photo_email from '../assets/images/mail-icon.png'
import photo_phone from '../assets/images/phone-icon.png'

export default function Contact(props) {
  return (
    <div className='contact-card'>
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={photo_phone} alt="" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={photo_email} alt="" />
        <p>{props.email}</p>
      </div>
    </div>
  )
}