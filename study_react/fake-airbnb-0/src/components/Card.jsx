// import Katie_Zaferes from '../assets/images/Katie-Zaferes.png'
import star from '../assets/images/star.png'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={`src/assets/images/${props.img}`} alt="Katie_Zaferes" className='card--image'/>
      <div className='stats'>
        <img src={star} alt="star" className='card-star' />
        <span>{props.rating}</span>
        <span className='gray'>({props.reviewCount})  • </span>
        <span className='gray'>{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className='bold'>From ${props.price}</span> / person</p>
    </div>
  )
}