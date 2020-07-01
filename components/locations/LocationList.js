
import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"

export default () => {
    // const locations = useLocations()
    const { theLocations } = useContext(LocationContext)

    return (
        <div className="locations">
        {
            // theLocations.map(loc => Location(loc) />)
            theLocations.map(loc => <Location key={loc.id} location={loc} />)
        }
        </div>
    )
}