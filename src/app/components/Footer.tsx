import { Flex, Link, Image, ListItem, List } from "@chakra-ui/react";
import { navItems } from "../site.config";
import NextLink from "next/link";

export const Footer = () => {
  return (
    <Flex
      as={"footer"}
      justifyContent="center"
      flexDir="column"
      borderTopWidth="1px solid black"
      id="footer"
    >
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        gap={{ base: 0, lg: 4 }}
        display="flex"
        w="full"
        py={5}
        textColor={"#e4e4e4"}
      >
        <Flex alignSelf={"center"} flexDir="column" mb={{ base: 5, lg: 0 }}>
          <Image
            alt="Helldivers 2 Home"
            src={"/images/hd2-logo.webp"}
            p={1}
            w={"40px"}
          />
        </Flex>

        <Flex
          flexDir={{ base: "column", lg: "row" }}
          gap={{ base: 10, lg: 14 }}
          textAlign={"center"}
          alignItems={"center"}
        >
          <List flexDir="row" gap={4} display="flex">
            <ListItem maxW="24ch">
              <Link as={NextLink} color="text.200" href={"/"}>
                Home
              </Link>
            </ListItem>
            {navItems.map((navItem) => {
              return (
                <ListItem maxW="24ch" key={"navitem_" + navItem.title}>
                  <Link as={NextLink} href={navItem.url}>
                    {navItem.title}
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Flex>
      </Flex>
    </Flex>
  );
};
