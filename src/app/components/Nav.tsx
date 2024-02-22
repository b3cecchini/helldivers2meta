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
} from "@chakra-ui/react";

import { useRouter, usePathname } from "next/navigation";
import { navItems } from "../site.config";
import NextLink from "next/link";

export const Nav = () => {
  const pathName = usePathname();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      flexDir="column"
      boxShadow="1px 0 5px rgba(0, 0, 0, 0.73)"
      zIndex={6}
      transition="background 360ms ease-out"
      bg={"#5591a9"}
    >
      <Container
        alignItems="center"
        justifyContent="space-between"
        display="flex"
        w="100%"
        variant="main"
      >
        <Flex alignItems="center">
          <Link href="/" title="Home">
            {/* <Logo w='5.4375rem' h='1.8rem' /> LOGO IMAGE HERE*/}
          </Link>
        </Flex>
        <Flex alignItems="center">
          <Box
            display={{ base: "block", lg: "block" }}
            w="1px"
            h="1.5rem"
            mx={6}
            bg="rgba(255, 255, 255, 0.2)"
          />

          {/* <MobileNav HERE*/}
        </Flex>
      </Container>
      <Box
        id="box_1"
        display={{ base: "none", lg: "flex" }}
        w="100%"
        bg="bg.800"
      >
        {/* <Container
          id="nav_container"
            zIndex={1}
            alignItems='center'
            justifyContent='center'
            display='flex'
            w='100%'
            h={{ base: 12, lg: 12 }}
            variant='main'
          > */}
        <Box
          id="nav_box"
          as="nav"
          zIndex={1}
          ms={{ base: -3, lg: 0 }}
          h={{ base: 12, lg: 12 }}
          pl={5}
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
                <ListItem key={item.title} h="100%" py={{ base: 4, lg: 0 }}>
                  <Button
                    as={NextLink}
                    h="100%"
                    color={pathName == item.url ? "text.50" : "text.100"}
                    href={item.url}
                    variant="nav"
                    fontSize={{ base: "lg", lg: "md" }}
                    fontWeight={pathName == item.url ? "bold" : "medium"}
                    _hover={{
                      color: "text.50",
                    }}
                    _active={{
                      bg: "bg.800",
                    }}
                    borderRadius={0}
                    height="100%"
                    px={5}
                  >
                    {item.title}
                  </Button>
                </ListItem>
              );
            })}
          </List>
        </Box>
        {/* </Container> */}
      </Box>
      <Collapse animateOpacity in={isOpen}>
        <Container zIndex={10} flexDir="column" w="100%" variant="main">
          <Flex alignItems="flex-start" flexDir="column" gap={4} mt={10}></Flex>
        </Container>
      </Collapse>
    </Flex>
  );
};
