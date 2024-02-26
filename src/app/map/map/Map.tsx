"use client";
import {
  MapContainer,
  Marker,
  Polygon,
  useMapEvents,
  TileLayer,
  Tooltip,
  FeatureGroup,
  Popup,
} from "react-leaflet";
import { Image, Text, VStack, Flex, Heading, Button } from "@chakra-ui/react";
import { LuSwords } from "react-icons/lu";
import { sectorData } from "../../../../public/data/sectorBounds";
import L, { LatLng } from "leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

type PlanetData = {
  name: string;
  planetLiberatedPercent: number;
  coordinates: number[];
  defenseCampaign: boolean;
  liberationCampaign: boolean;
};
type MarkerProps = {
  planet: PlanetData;
  key: string;
  children: any;
};

function LocationMarker({ planet, key, children }: MarkerProps) {
  const [iconSize, setIconSize] = useState<[number, number]>([5, 5]);
  const map = useMapEvents({
    zoomend() {
      switch (map.getZoom()) {
        case 5:
          console.log("found 5");
          setIconSize([50, 50]);
          return;
        case 4:
          console.log("found 4");
          setIconSize([30, 30]);
          return;
        case 3:
          console.log("found 3");
          setIconSize([18, 18]);
          return;
        case 2:
          console.log("found 2");
          setIconSize([8, 8]);
          return;
        default:
          console.log("default");
          setIconSize([5, 5]);
          return;
      }
    },
    click(e) {
      console.log([e.latlng.lat, e.latlng.lng]);
    },
  });

  return (
    <Marker
      key={key}
      position={[planet.coordinates[0], planet.coordinates[1]]}
      icon={
        new Leaflet.Icon({
          iconUrl: "/images/circle.png",
          iconSize: iconSize,
          html: LuSwords,
        })
      }
    >
      {children}
    </Marker>
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
        {/* <TileLayer
          url="/images/map/{z}_{x}_{y}.jpg"
          noWrap={true}
          tileSize={256.23}
          zIndex={1}
        /> */}

        {sectorData.map((sector, sectorIndex) => {
          return (
            <>
              <FeatureGroup>
                <Popup> {sector.name}</Popup>
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
              </FeatureGroup>
              {sector.planets.map((planet, planetIndex) => {
                if (planet.coordinates[0] != 0)
                  return (
                    <LocationMarker
                      key={"sector_" + sectorIndex + "_planet_" + planetIndex}
                      planet={planet}
                    >
                      {planet.defenseCampaign == true && <LuSwords />}
                      <Tooltip
                        opacity={1}
                        direction="top"
                        offset={[0, -10]}
                        className="custom-leaflet-tooltip"
                      >
                        <VStack
                          align="start"
                          p={2}
                          spacing={4}
                          w={"100%"}
                          bgColor={"rgba(0, 31, 63, 0.6)"}
                        >
                          <Heading
                            as={"h2"}
                            pr={8}
                            color={"coal.50"}
                            fontFamily="serif"
                            fontSize="md"
                            mb={5}
                          >
                            {planet.name}
                          </Heading>
                          <Text>
                            {`${planet.planetLiberatedPercent}% Liberated`}
                          </Text>
                        </VStack>
                      </Tooltip>
                    </LocationMarker>
                  );
              })}
            </>
          );
        })}
      </MapContainer>
    </>
  );
}
