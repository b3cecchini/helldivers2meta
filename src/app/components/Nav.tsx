"use client";
import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  Link,
} from "@chakra-ui/react";

import { usePathname } from "next/navigation";
import { navItems } from "../site.config";
import NextLink from "next/link";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export const Nav = () => {
  const pathName = usePathname();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      pos={"absolute"}
      boxShadow="1px 0 5px rgba(0, 0, 0, 0.7)"
      zIndex={4}
      w={"100%"}
      bgColor={"rgba(0, 31, 63, 0.6)"}
    >
      <Box display={{ base: "none", md: "flex" }} w="100%">
        <Box
          id="nav_box"
          as="nav"
          zIndex={1}
          ms={{ base: -3, lg: 0 }}
          h={{ base: 12, lg: 12 }}
          pl={10}
          my={1}
          flexDirection={"row"}
          alignItems={"center"}
        >
          <List
            flexDir={"row"}
            gap={{ base: 4, md: 0 }}
            display="flex"
            h="100%"
            ms={{ base: 0, lg: -5 }}
          >
            <Link href={"/"}>
              <Image
                alt="Helldivers 2 Home"
                src={"/images/hd_arsenal_logo.png"}
                py={3}
                w={"120px"}
              />
            </Link>
            {navItems.map((item) => {
              return (
                <ListItem key={item.title}>
                  <Button
                    as={NextLink}
                    color={pathName.includes(item.url) ? "#FFE900" : "#e4e4e4"}
                    href={item.url}
                    variant="nav"
                    fontSize="lg"
                    fontWeight={pathName.includes(item.url) ? "bold" : "medium"}
                    _hover={{
                      color: "#FFE900",
                    }}
                    borderRadius={0}
                    borderBottom={
                      pathName.includes(item.url)
                        ? " 2px solid #FFE900"
                        : "none"
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

      <Flex
        mr={2}
        w={"100%"}
        justifyContent={"space-between"}
        display={{ base: "flex", md: "none" }}
      >
        <Link href={"/"}>
          <Image
            alt="Helldivers 2 Home"
            src={"/images/hd_arsenal_logo.png"}
            py={3}
            pl={3}
            w={"150px"}
          />
        </Link>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                mt={1}
                isActive={isOpen}
                as={Button}
                p={2}
                bgColor={"#FFE900"}
                _active={{ bgColor: "#FFE900" }}
              >
                {isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )}
              </MenuButton>
              <MenuList
                boxShadow="1px 0 5px rgba(0, 0, 0, 0.7)"
                zIndex={4}
                w={"100%"}
                bgColor={"rgba(0, 31, 63)"}
                borderColor={"rgba(0, 31, 63, 0.6)"}
              >
                <MenuItem bgColor={"rgba(0, 31, 63)"} justifyContent={"center"}>
                  <Button
                    as={NextLink}
                    color={"#e4e4e4"}
                    href={"/"}
                    variant="nav"
                    fontSize={{ base: "lg", lg: "md" }}
                    fontWeight={"medium"}
                    _hover={{
                      color: "#FFE900",
                    }}
                    borderRadius={0}
                    height="100%"
                    px={2}
                  >
                    Home
                  </Button>
                </MenuItem>
                {navItems.map((item) => {
                  return (
                    <MenuItem
                      key={item.title}
                      bgColor={"rgba(0, 31, 63)"}
                      justifyContent={"center"}
                    >
                      <Button
                        as={NextLink}
                        color={
                          pathName.includes(item.url) ? "#FFE900" : "#e4e4e4"
                        }
                        href={item.url}
                        variant="nav"
                        fontSize={{ base: "lg", lg: "md" }}
                        fontWeight={
                          pathName.includes(item.url) ? "bold" : "medium"
                        }
                        _hover={{
                          color: "#FFE900",
                        }}
                        borderRadius={0}
                        borderBottom={
                          pathName == item.url ? " 2px solid #FFE900" : "none"
                        }
                        height="100%"
                        px={2}
                        mx={3}
                      >
                        {item.title}
                      </Button>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
    </Flex>
  );
};
