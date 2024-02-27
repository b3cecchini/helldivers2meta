import { Flex, Link, Image, ListItem, List } from "@chakra-ui/react";
import { navItems } from "../site.config";
import NextLink from "next/link";

export const Footer = () => {
  return (
    <Flex id={"footer"} as={"footer"} justifyContent={"center"}>
      <Flex flexDir={"column"} gap={4} py={5} textColor={"#e4e4e4"}>
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          alignItems={"center"}
          gap={4}
        >
          <Image
            alt={"Helldivers 2 Home"}
            src={"/images/hd2-logo.webp"}
            p={1}
            w={"40px"}
          />

          <Flex>
            <List
              display={"flex"}
              flexDir={{ base: "column", lg: "row" }}
              gap={4}
              alignItems={"center"}
              fontWeight={"medium"}
            >
              <ListItem>
                <Link
                  as={NextLink}
                  href={"/"}
                  _hover={{
                    color: "#FFE900",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Link>
              </ListItem>
              {navItems.map((navItem) => {
                return (
                  <ListItem maxW={"24ch"} key={"navitem_" + navItem.title}>
                    <Link
                      as={NextLink}
                      href={navItem.url}
                      _hover={{
                        color: "#FFE900",
                        textDecoration: "none",
                      }}
                    >
                      {navItem.title}
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </Flex>
        </Flex>
        <Flex justifyContent={"center"} fontWeight={"medium"}>
          Contact: contact.hdarsenal@gmail.com
        </Flex>
      </Flex>
    </Flex>
  );
};
