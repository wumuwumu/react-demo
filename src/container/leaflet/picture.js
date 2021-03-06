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
      attributionControl: false,
    };
    this.map = L.map("map", {
      minZoom: 4,
      maxZoom: 6,
      center: [0, 0],
      zoom: 5,
      crs: L.CRS.Simple,
    });

    // try event
    this.map.on("click", function (e) {
      console.log(e);
      alert("纬度：" + e.latlng.lat + "\n经度：" + e.latlng.lng);
    });
    // dimensions of the image
    var w = 600,
      h = 360,
      url = "https://images2.alphacoders.com/727/72732.png";
    // calculate the edges of the image, in coordinate space
    var southWest = this.map.unproject([0, h], this.map.getMaxZoom() - 1);
    var northEast = this.map.unproject([w, 0], this.map.getMaxZoom() - 1);
    // var bounds = [[0,-180], [90,180]]

    var bounds = new L.LatLngBounds(southWest, northEast);
    console.log(bounds);
    // add the image overlay,
    // so that it covers the entire map
    L.imageOverlay(url, bounds).addTo(this.map);
    // tell leaflet that the map is exactly as big as the image
    this.map.setMaxBounds(bounds);

    var myIcon = L.divIcon({
      html: `
    <div style="background:red;">大家好</div>
  `,
    });
    // you can set .my-div-icon styles in CSS

    var marker1 = L.marker([-2.8, 7], { icon: myIcon, draggable: true });
    marker1.on("click", (e) => {
      alert("21212");
    });
    this.map.addLayer(marker1);
    // L.marker([-2.7,7]).addTo(this.map);
  }

  render() {
    return <div id="map" className={styles.map} />;
  }
}
