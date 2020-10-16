import React from 'react'

import MapMarkerImage from '../images/map-marker.svg'
import '../styles/pages/orphanageMap.css'
import 'leaflet/dist/leaflet.css'

import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Map, TileLayer } from 'react-leaflet'

function OrphanageMap(){
    return(
        
        <div id = "page-map">
            <aside>

                <header>
                    <img src = {MapMarkerImage} alt = "Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita</p>
                </header>

                <footer>
                    <strong>Chapecó</strong>
                    <span>Santa Catarina</span>
                </footer>

            </aside>

            <Map center = {[-27.1094775,-52.6128317]} zoom = {15} style = {{width: '100%', height: '100%'}}>
                <TileLayer url = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>

            <Link to = "/OrphanageMap" className = "create-orphanage">
                <FiPlus size = {32} color = "rgba(0,0,0,0.6)"/>
            </Link>

        </div>

    )
}

export default OrphanageMap