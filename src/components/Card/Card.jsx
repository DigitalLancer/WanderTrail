import React from 'react'
import './card.css'
function Card(props) {
  console.log(props.country);
  if (props.country === "Germany") {
    return (
      <div className='card germany'>
        <div className="info">
          <h1>Germany</h1>
          <div className='detail'>
            <p>Discover Germany’s scenic trails, from the Black Forest to the Bavarian Alps—an adventurer’s dream</p>
            <button type="submit" className='btn-submit'>Details</button>
          </div>
        </div>
      </div>
    )
  }
  else if (props.country === "Austria") {
    return (
      <div className='card austria'>
        <div className="info">
          <h1>Austria</h1>
          <div className="detail">
            <p>Breathe in the crisp alpine air and hike through Austria’s stunning mountain landscapes</p>
            <button type="submit" className='btn-submit'>Details</button>
          </div>
        </div>
      </div>
    )
  }
  else if (props.country === "Italy") {
    return (
      <div className='card italy'>
        <div className="info">
          <h1>Italy</h1>
          <div className="detail">
            <p>Step into Italy’s breathtaking beauty, where coastal cliffs and rolling hills meet the sky</p>
            <button type="submit" className='btn-submit'>Details</button>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className='card turkey'>
        <div className="info">
          <h1>Turkey</h1>
          <div className="detail">
            <p>Uncover Turkey’s hidden gems on foot—where ancient ruins and dramatic coastlines await every step</p>
            <button type="submit" className='btn-submit'>Details</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Card
