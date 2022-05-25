import React from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import customMarker from '../images/icon-location.svg'
const icon = L.icon({ iconUrl: customMarker })

const SetViewOnRefresh = ({ coords }) => {
	const map = useMap()
	map.setView(coords, map.getZoom())

	return null
}
const Map = ({ lat = 20.505, lng = -0.09 }) => {
	return (
		<MapContainer id='map' center={[lat, lng]} zoom={11} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker key={lat} position={[lat, lng]} icon={icon}></Marker>

			<SetViewOnRefresh coords={[lat, lng]} />
		</MapContainer>
	)
}

export default Map
