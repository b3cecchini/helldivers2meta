"use client";
import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  Link,
  List,
  ListItem,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

import { useRouter, usePathname } from "next/navigation";
import { navItems } from "../site.config";
import NextLink from "next/link";

export const Nav = () => {
  const pathName = usePathname();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      pos={"absolute"}
      boxShadow="1px 0 5px rgba(0, 0, 0, 0.7)"
      zIndex={4}
      w={"100vw"}
      bgColor={"rgba(0, 31, 63, 0.6)"}
      //backdropFilter={"contrast(30%)"}
    >
      <Box display={{ base: "none", lg: "flex" }} w="100%">
        <Box
          id="nav_box"
          as="nav"
          zIndex={1}
          ms={{ base: -3, lg: 0 }}
          h={{ base: 12, lg: 12 }}
          pl={10}
          my={2}
        >
          <List
            flexDir={{ base: "column", lg: "row" }}
            gap={{ base: 4, md: 0, xl: 1 }}
            display="flex"
            h="100%"
            ms={{ base: 0, lg: -5 }}
          >
            {navItems.map((item) => {
              return (
                <ListItem key={item.title}>
                  <Button
                    as={NextLink}
                    color={pathName == item.url ? "yellow" : "#e4e4e4"}
                    href={item.url}
                    variant="nav"
                    fontSize={{ base: "lg", lg: "md" }}
                    fontWeight={pathName == item.url ? "bold" : "medium"}
                    _hover={{
                      color: "yellow",
                    }}
                    borderRadius={0}
                    borderBottom={
                      pathName == item.url ? " 2px solid yellow" : "none"
                    }
                    height="100%"
                    px={2}
                    mx={3}
                  >
                    {item.title}
                  </Button>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Flex>
  );
};
