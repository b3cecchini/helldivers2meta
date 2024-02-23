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
      //backdropFilter={"contrast(30%)"}
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
        >
          <List
            flexDir={"row"}
            gap={{ base: 4, md: 0 }}
            display="flex"
            h="100%"
            ms={{ base: 0, lg: -5 }}
          >
            {navItems.map((item) => {
              return (
                <ListItem key={item.title}>
                  <Button
                    as={NextLink}
                    color={pathName.includes(item.url) ? "yellow" : "#e4e4e4"}
                    href={item.url}
                    variant="nav"
                    fontSize={{ base: "lg", lg: "md" }}
                    fontWeight={pathName.includes(item.url) ? "bold" : "medium"}
                    _hover={{
                      color: "yellow",
                    }}
                    borderRadius={0}
                    borderBottom={
                      pathName.includes(item.url) ? " 2px solid yellow" : "none"
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
        justifyContent={"end"}
        display={{ base: "flex", md: "none" }}
      >
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Button}
                p={2}
                bgColor={"yellow"}
                _active={{ bgColor: "yellow" }}
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
                          pathName.includes(item.url) ? "yellow" : "#e4e4e4"
                        }
                        href={item.url}
                        variant="nav"
                        fontSize={{ base: "lg", lg: "md" }}
                        fontWeight={
                          pathName.includes(item.url) ? "bold" : "medium"
                        }
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
