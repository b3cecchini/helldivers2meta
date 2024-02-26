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
      },
      ".custom-leaflet-tooltip": {
        backgroundColor: "gba(0, 31, 63, 0.6)",
        textColor: "blueviolet",
      },
      /**
       * 
       .leaflet-tooltip-own {
          position: absolute;
          padding: 4px;
          background-color: rgba(0, 0, 0, 0.4);
          border: 0px solid #000;
          color: #000;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          pointer-events: none;
          box-shadow: 0 1px 3px rgba(0,0,0,0.4);
}
          
       */
    },
  },
});
