import React, { Component } from "react";
import PropTypes from "prop-types";
import L from "leaflet";
import styles from "./style/simple.module.css";
import "leaflet/dist/leaflet.css";
import "./style/leaflet.draw.css";
import "./draw/Draw.Polygon";
import "./draw/util/GeometryUtil";
import "./draw/util/LineUtil.Intersect";
import "./draw/util/Polygon.Intersect";
import "./draw/util/Polyline.Intersect";
import "./draw/util/LatLngUtil";
import "./draw/util/TouchEvents";

import "./draw/edit/Edit.Poly";
export default class simple extends Component {
  constructor(prop) {
    super(prop);
    this.map = null;
    this.tempItems = null;
    this.areaItems = null;
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
    L.tileLayer(
      "http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
      {
        subdomains: "1234",
        attribution: "高德地图"
      }
    ).addTo(this.map);

    this.areaItems = new L.FeatureGroup();
    this.tempItems = new L.FeatureGroup();
    this.map.addLayer(this.areaItems);
    this.map.addLayer(this.tempItems);
    this.map.on(L.Draw.Event.CREATED, this.featureChange.bind(this));
  }

  featureChange(e) {
    let type = e.layerType,
      layer = e.layer;

    console.log(type);
    console.log(e);
    layer.on("click", function(e) {
      console.log("1221");
    });
    console.log(layer.editing);
    layer.editing.enable();
    this.tempItems.clearLayers();
    this.tempItems.addLayer(layer);
    // 弹出对话框，让用户编辑地块的基本信息
  }

  createArea() {
    new L.Draw.Polygon(this.map, {
      allowIntersection: false,
      showArea: true
    }).enable();
  }

  render() {
    return (
      <div>
        <div id="map" className={styles.map}></div>
        <button onClick={this.createArea.bind(this)}>创建基地</button>
      </div>
    );
  }
}
