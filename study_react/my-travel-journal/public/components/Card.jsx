import location__icon from '../../src/assets/images/location__icon.png'

export default function Card(props) {

  return (
        <div>
          <div className="card--wrapper">
            <div className='card--img--wrapper'>
              <img src={props.imageUrl} alt="" />
            </div>
            <div className='card--info--wrapper'>
              <div className='card--info--top'><img src={location__icon} alt="" /><span className='card--info--wrappe-location'>{props.location}</span> <a href={props.googleMapsUrl} className='card--info--wrappe-link'>View on Google Maps</a> </div>
              <div className='card--info--title'><h3>{props.title}</h3></div>
              <div className='card--info--date'><span>{props.startDate}</span> - <span>{props.endDate}</span></div>
              <div className='card--info--description'>
                <p>{props.description}</p>
              </div>
            </div>
          </div>
          <div className='tmp'></div>
        </div>
    // fixed me there need a <hr />！ 😱
  )
}