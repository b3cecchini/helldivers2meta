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
        backgroundSize: "contain",
      },
      ".custom-leaflet-tooltip": {
        backgroundColor: "gray",
        textColor: "#black",
        justifyContent: "center",
      },
    },
  },
});
