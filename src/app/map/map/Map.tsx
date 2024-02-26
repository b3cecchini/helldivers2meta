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

type MarkerProps = {
  position: number[];
  key: string;
};

function LocationMarker({ position, key }: MarkerProps) {
  const [iconSize, setIconSize] = useState<[number, number]>([15, 15]);
  const map = useMapEvents({
    zoomend() {
      switch (map.getZoom()) {
        case 5:
          console.log("found 5");
          setIconSize([50, 50]);
          return;
        case 4:
          console.log("found 4");
          setIconSize([40, 40]);
          return;
        case 3:
          console.log("found 3");
          setIconSize([30, 30]);
          return;
        case 2:
          console.log("found 2");
          setIconSize([20, 20]);
          return;
        default:
          console.log("default");
          setIconSize([15, 15]);
          return;
      }
    },
    click(e) {
      console.log([e.latlng.lat, e.latlng.lng]);
    },
  });

  return (
    <Marker
      position={[position[0], position[1]]}
      icon={
        new Leaflet.Icon({
          iconUrl: "/images/circle.png",
          iconSize: iconSize,
        })
      }
    />
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
        style={{ backgroundColor: "black", cursor: "crosshair" }}
        attributionControl={false}

        //zoomControl={() => {getIconSize()}}
      >
        <TileLayer
          url="/images/map/{z}_{x}_{y}.jpg"
          noWrap={true}
          tileSize={256.23}
          zIndex={1}
        />

        {sectorData.map((sector, sectorIndex) => {
          return (
            <>
              <Polygon
                key={"polygon_shape_" + sectorIndex}
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
              {sector.planets.map((planet, planetIndex) => {
                if (planet.name === "Super Earth")
                  return (
                    <LocationMarker
                      key={"sector_" + sectorIndex + "_planet_" + planetIndex}
                      position={[planet.coordinates[0], planet.coordinates[1]]}
                    />
                  );
              })}
            </>
          );
        })}
      </MapContainer>
    </>
  );
}
