import React from 'react';

import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default (props)=>{
  return (
    <section style={{height: "100%"}}>
      <GoogleMapLoader
        containerElement={
          <div
            {...props.containerElementProps}
            style={{
              height: "100%",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: props.lat, lng: props.lon }}
          />
        }
      />
    </section>
  );
}
