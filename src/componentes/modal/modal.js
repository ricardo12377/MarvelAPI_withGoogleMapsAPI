import React from 'react';
import style from './modal.module.css'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function Modal(props) {

    const [map, setMap] = React.useState(null)

    const containerStyle = {
        width: '400px',
        height: '400px'
      };
      
      const center = {
        lat: -7.23718,
        lng: -39
      };


      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBZzdCku12wILDCWeBoOUJfJiH2Yn6ABtY"
      })

      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])

      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
     
      return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        ><></>
        </GoogleMap>
    ) : <></>
}

export default Modal;