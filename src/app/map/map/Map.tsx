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
  enemyType?: string;
  children: any;
};

function LocationMarker({ planet, key, enemyType, children }: MarkerProps) {
  const [iconSize, setIconSize] = useState<[number, number]>([5, 5]);
  const map = useMapEvents({
    zoomend() {
      switch (map.getZoom()) {
        case 5:
          setIconSize([50, 50]);
          return;
        case 4:
          setIconSize([30, 30]);
          return;
        case 3:
          setIconSize([18, 18]);
          return;
        case 2:
          setIconSize([8, 8]);
          return;
        default:
          setIconSize([5, 5]);
          return;
      }
    },
  });

  const imageurl =
    planet.planetLiberatedPercent === 0
      ? enemyType === "Terminids"
        ? "/images/planet/planet_terminid_control.png"
        : enemyType === "Automatons"
        ? "/images/planet/planet_automaton_control.png"
        : "/images/planet/planet_icon.png"
      : planet.planetLiberatedPercent < 100
      ? enemyType === "Automatons"
        ? "/images/planet/planet_automaton_liberation_progress.png"
        : "/images/planet/planet_terminid_liberation_progress.png"
      : "/images/planet/planet_icon.png";

  return (
    <Marker
      key={key}
      position={[planet.coordinates[0], planet.coordinates[1]]}
      icon={
        new Leaflet.Icon({
          iconUrl: imageurl,
          iconSize: iconSize,
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
      <Heading
        as={"h1"}
        mt={7}
        mb={4}
        textColor={"white"}
        textShadow={`
          -2px 2px 2px #000,
				  2px 2px 2px #000,
				  2px -2px 0 #000,
				  -2px -2px 0 #000;`}
      >
        Galactic War Progress
      </Heading>
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
                      enemyType={sector.enemyType}
                    >
                      {planet.defenseCampaign == true && <LuSwords />}
                      <Tooltip
                        opacity={1}
                        direction="top"
                        offset={[0, -10]}
                        className="custom-leaflet-tooltip"
                      >
                        <VStack
                          //align="start"
                          p={5}
                          w={"100%"}
                          bgColor={"rgba(0, 31, 63, 0.8)"}
                          textColor={"white"}
                        >
                          <Heading as={"h2"} fontSize={18} mb={3}>
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
