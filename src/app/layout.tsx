import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { theme } from "./theme/theme";
import { Nav } from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helldivers 2 Meta",
  description:
    "Community app to share information and latest Loadouts to spread maximum democracy",
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
            backgroundSize={{ base: "cover", lg: "100%" }}
            backgroundRepeat={"repeat-y"}
            backgroundPosition={{ base: "50% 20%", md: "30% 0%", lg: "0% 0%" }}
            minH={"200vh"}
            px={{ base: ".5rem", lg: "3rem" }}
            minW={"100%"}
            overflowX={"hidden"}
          >
            {children}
          </Container>
        </ChakraProvider>
      </body>
    </html>
  );
}
