import React, { useState, useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const SetViewOnRefresh = ({ coords }) => {
	const map = useMap()
	map.setView(coords, map.getZoom())

	return null
}
const Map = ({ lat = 20.505, lng = -0.09 }) => {
	return (
		<MapContainer
			id='map'
			center={[lat, lng]}
			zoom={14}
			scrollWheelZoom={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={[lat, lng]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
			<SetViewOnRefresh coords={[lat, lng]} />
		</MapContainer>
	)
}

export default Map
