import React from 'react'
import { Icon } from '@iconify/react'
import closeIcon from '@iconify/icons-mdi/close'

const LocationInfoBox = ({ info: { id, title }, setLocationInfo }) => {
    return (
        <div className="location-info">
            <button onClick={() => setLocationInfo(null)} className="location-info-close"><Icon icon={closeIcon} /></button>
            <h2>Event Location Info</h2>
            <ul>
                <li>
                    ID : <strong> {id}</strong>
                </li>
                <li>
                    Title : <strong> {title}</strong>
                </li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
