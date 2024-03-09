import { Flex, Heading, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./map/Map"), { ssr: false });

export default async function PageMap() {
  return (
    <>
      <Heading
        mb={2}
        textColor={"white"}
        textShadow={`
          -2px 2px 2px #000,
				  2px 2px 2px #000,
				  2px -2px 0 #000,
				  -2px -2px 0 #000;`}
      >
        Galactic War Progress
      </Heading>
      <Flex justifyContent={"center"} gap={5} mb={2}>
        <Heading
          fontSize={24}
          color={"red"}
          textShadow={`
          -2px 2px 2px #000,
				  2px 2px 2px #000,
				  2px -2px 0 #000,
				  -2px -2px 0 #000;`}
        >
          Automatons
        </Heading>
        <Heading
          fontSize={24}
          color={"yellow"}
          textShadow={`
          -2px 2px 2px #000,
				  2px 2px 2px #000,
				  2px -2px 0 #000,
				  -2px -2px 0 #000;`}
        >
          Terminids
        </Heading>
      </Flex>
      {/* <Flex justifyContent={"center"}>
        <Text
          color={"white"}
          textShadow={`
          -2px 2px 2px #000,
				  2px 2px 2px #000,
				  2px -2px 0 #000,
				  -2px -2px 0 #000;`}
          mb={1}
        >
          This map is updated every 12 hours
        </Text>
      </Flex> */}
      <MapComponent />;
      <Text
        color={"white"}
        textShadow={`
          -2px 2px 2px #000,
				  2px 2px 2px #000,
				  2px -2px 0 #000,
				  -2px -2px 0 #000;`}
        mb={1}
      >
        Last updated March 9, 2024 11:11AM EST
      </Text>
    </>
  );
}
