import { Flex, Heading } from "@chakra-ui/react";

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
