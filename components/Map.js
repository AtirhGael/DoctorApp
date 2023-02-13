import React from "react";
import {StyleSheet} from 'react-native';
import MapView from "react-native-maps";

const Map = (props) => {
  console.log("Location of the map:", props)
  return (
    <MapView
      style={styles.map}
      initialRegion={props.initialRegion}
    />
  )
}

export default Map;

const styles= StyleSheet.create({
  map: {
    marginTop:15,
    height: 250,
    width:'100%'
  },
})