"use client";
import {
  MapContainer,
  Marker,
  Polygon,
  useMapEvents,
  TileLayer,
} from "react-leaflet";
import {
  Divider,
  HStack,
  Image,
  Text,
  VStack,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";

import { sectorData } from "../../../../public/data/sectorBounds";
import L, { LatLng } from "leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

const geoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [0, 0] },
      properties: { prop0: "value0" },
    },
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [22.0, 0.0],
          [23.0, 1.0],
          [24.0, 0.0],
          [25.0, 1.0],
        ],
      },
      properties: {
        prop0: "value0",
        prop1: 0.0,
      },
    },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Polygon",
    //     coordinates: [
    //       [
    //         [100.0, 0.0],
    //         [101.0, 0.0],
    //         [101.0, 1.0],
    //         [100.0, 1.0],
    //         [100.0, 0.0],
    //       ],
    //     ],
    //   },
    //   properties: {
    //     prop0: "value0",
    //     prop1: { this: "that" },
    //   },
    // },
  ],
};

function LocationMarker() {
  const [iconSize, setIconSize] = useState<[number, number]>([15, 15]);
  const map = useMapEvents({
    // zoomend() {
    //   switch (map.getZoom()) {
    //     case 5:
    //       console.log("found 5");
    //       setIconSize([50, 50]);
    //       return;
    //     case 4:
    //       console.log("found 4");
    //       setIconSize([40, 40]);
    //       return;
    //     case 3:
    //       console.log("found 3");
    //       setIconSize([30, 30]);
    //       return;
    //     case 2:
    //       console.log("found 2");
    //       setIconSize([20, 20]);
    //       return;
    //     default:
    //       console.log("default");
    //       setIconSize([15, 15]);
    //       return;
    //   }
    // },
    click(e) {
      console.log([e.latlng.lat, e.latlng.lng]);
    },
  });

  return (
    <Marker
      position={[0, 0]}
      icon={
        new Leaflet.Icon({
          iconUrl: "/images/hd2-logo.webp",
          iconSize: iconSize,
        })
      }
    ></Marker>
  );
}

export default function Map() {
  return (
    <>
      <MapContainer
        center={[0, 0]}
        zoom={1}
        // maxBounds={[
        //   [-300, -300],
        //   [300, 300],
        // ]}
        maxBoundsViscosity={1}
        worldCopyJump={false}
        maxZoom={5}
        minZoom={2}
        scrollWheelZoom={true}
        doubleClickZoom={false}
        style={{ backgroundColor: "black" }}
        attributionControl={false}
        //zoomControl={() => {getIconSize()}}
      >
        <TileLayer
          url="/images/map/{z}_{x}_{y}.jpg"
          noWrap={true}
          tileSize={256.23}
          zIndex={1}
        />

        {sectorData.map((sector, index) => {
          return (
            <Polygon
              key={"polygon_shape_" + index}
              pathOptions={{
                color:
                  sector.enemyType === "None"
                    ? "skyblue"
                    : sector.enemyType === "Terminids"
                    ? "yellow"
                    : "red",
              }}
              positions={sector.positions as unknown as LatLng[]}
            />
          );
        })}

        <LocationMarker />
      </MapContainer>
    </>
  );
}
