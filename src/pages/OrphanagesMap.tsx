import React from 'react';

import mapMarkerImg from '../images/map-marker.svg'
import {Link} from 'react-router-dom';
import{FiPlus,FiArrowRight} from 'react-icons/fi'
import{Map, TileLayer, Marker, Popup} from 'react-leaflet';
import Leaflet from 'leaflet';

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';//importado para renderizar o mapa

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconAnchor:[28,68],
  iconSize:[56, 68],
  popupAnchor:[170, 2]
})

function OrphanagesMap(){
  return(
      <div id="page-map">
        <aside>
          <header>
            <img src={mapMarkerImg} alt="Happy"/>

            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando sua visita</p>
          </header>

          <footer>
            <strong>Goiânia</strong>
            <span>Goiás</span>
          </footer>
        </aside>

        <Map
          center ={[-16.7166447,-49.31457]}
          zoom = {15}
          style = {{width:'100%', height:'100%'}}
          >
            {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
            <TileLayer 
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_TOKEN_MAPBOX}`} 
            />

            <Marker
              icon={mapIcon}
              position={[-16.7166447,-49.31457]}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                Lar das Meninas
                <Link to="/orphanages/1">
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
        </Map>

        <Link to="/orphanages/create" className="create-orphanage">
          <FiPlus size = {32} color = "#FFF"/>
        </Link>
      </div>
  );
}

export default OrphanagesMap;