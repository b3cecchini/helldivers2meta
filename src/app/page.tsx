import { Box, Flex, Heading } from "@chakra-ui/react";
import { sanityClient } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import LoadoutList from "./components/loadoutList";

export default async function Home() {
  return (
    <Flex textAlign={"center"}>
      <Heading as={"h1"} textColor="red" textTransform={"uppercase"}>
        {" "}
        HOME PAGE
      </Heading>
    </Flex>
  );
}
