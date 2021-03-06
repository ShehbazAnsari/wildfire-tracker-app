import GoogleMapReact from 'google-map-react'
import { useState } from 'react'
import LocationInfoBox from './LocationInfoBox'
import LocationMarker from './LocationMarker'


const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const markers = eventData.map((ev, key) => {
        if (ev.categories[0].id === 8) {
            return <LocationMarker key={key} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null
    })
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'Enter Your Google Api Keys' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo ? <LocationInfoBox info={locationInfo} setLocationInfo={setLocationInfo} /> : null}
        </div>
    )
}

//Not In Used
Map.defaultProps = {
    center: {
        lat: 18.977499,
        lng: 72.827768
    },
    zoom: 6
}
//

export default Map
