import React, { Component } from "react";
import PropTypes from "prop-types";
import L from "leaflet";
import styles from "./style/simple.module.css";
import "leaflet/dist/leaflet.css";

export default class picture extends Component {
  constructor(prop) {
    super(prop);
    this.map = null;
  }

  componentDidMount() {
    let mapOptions = {
      attributionControl: false
    };
    this.map = L.map('map', {
      minZoom: 1,
      maxZoom: 6,
      center: [0, 0],
      zoom: 5,
      crs: L.CRS.Simple
  });
  // dimensions of the image
  var w = 600,
      h = 360,
      url = 'https://images2.alphacoders.com/727/72732.png';
  // calculate the edges of the image, in coordinate space
  var southWest = this.map.unproject([0, h], this.map.getMaxZoom()-1);
  var northEast = this.map.unproject([w, 0], this.map.getMaxZoom()-1);
  // var bounds = [[0,-180], [90,180]]

  var bounds = new L.LatLngBounds(southWest, northEast);
  console.log(bounds);
  // add the image overlay,
  // so that it covers the entire map
  L.imageOverlay(url, bounds).addTo(this.map);
  // tell leaflet that the map is exactly as big as the image
  this.map.setMaxBounds(bounds);
  }

  render() {
    return <div id="map" className={styles.map} />;
  }
}
