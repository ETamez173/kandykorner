import React from "react"

export default ({ location }) => (
    <section className="location">
   
        <div className="location__address">{location.address}</div>
        <div className="location__square__footage">{location.squareFootage}</div>
        <div className="location__square__footage">{location.handicap}</div>
    </section>
)



