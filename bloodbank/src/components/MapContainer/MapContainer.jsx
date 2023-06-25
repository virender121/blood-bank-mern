import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '100vh',
    width: '100%'
  };

  const defaultCenter = {
    lat: 19.075314480255834,
    lng: 72.88153973865361
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBL0YRc-Y8rYvkrGGlkFl7DLpPsLZxOXZc">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={defaultCenter}
      />
    </LoadScript>
  );
};

export default MapContainer;
