import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { theme } from "./theme/theme";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

const isLocal = process.env.NEXT_PUBLIC_ENV === "local";

export const metadata: Metadata = {
  icons: "images/hd2-logo.webp",
  title: "HD Arsenal",
  description:
    "A community app featuring an updated War Map and the latest Loadouts to spread maximum Democracy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <Nav />
          <Container
            justifyContent={"center"}
            textAlign={"center"}
            py={{ base: "2.5rem", md: "6rem" }}
            backgroundImage={"/images/splash/hd2-hero.jpg"}
            backgroundSize={"cover"}
            backgroundRepeat={"no-repeat"}
            backgroundAttachment={"fixed"}
            backgroundPosition={"center center"}
            minH={"100vh"}
            px={{ base: ".5rem", lg: "3rem" }}
            minW={"100%"}
            overflowX={"hidden"}
          >
            {children}
          </Container>
          <Footer />
        </ChakraProvider>
      </body>
      {!isLocal && <GoogleAnalytics gaId="G-18BTTGM5P5" />}
    </html>
  );
}
