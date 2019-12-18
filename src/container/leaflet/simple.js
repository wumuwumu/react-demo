import React, { Component } from "react";
import PropTypes from "prop-types";
import L from "leaflet";
import styles from "./style/simple.module.css";
import 'leaflet/dist/leaflet.css';

export default class simple extends Component {
 

  constructor(prop) {
    super(prop);
    this.map = null;
  }

  componentDidMount() {
    let mapOptions = {
      attributionControl: false
    };
    this.map = L.map("map", mapOptions).setView(
      [37.92388861359015, 115.22048950195312],
      16
    );
    // L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    //   attribution:
    //     '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    //   maxZoom: 18
    // }).addTo(this.map);
    L.tileLayer('http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
      subdomains: "1234",
      attribution: '高德地图'
    }).addTo(this.map);
  }

  render() {
    return <div id="map" className={styles.map} ></div>;
  }
}
