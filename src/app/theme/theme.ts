"use client";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#001f3f",
        textColor: "#000000",
      },
      ".leaflet-container": {
        height: "100vh",
        backgroundImage: "/images/splash/map_bg.jpg",
        backgroundSize: "cover",
      },
      ".custom-leaflet-tooltip": {
        backgroundColor: "rgba(0, 31, 63)",
        textColor: "#black",
        justifyContent: "center",
      },
      ".leaflet-popup-content": {
        mx: "1rem",
        margin: 0,
      },
      ".leaflet-popup-content p": {
        my: "0px !important",
      },
    },
  },
});
