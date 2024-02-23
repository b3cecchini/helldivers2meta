"use client";
import { Box, Flex, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { BlogData } from "./page";

import NextLink from "next/link";

interface Props {
  blogs: BlogData[];
}

export const BlogList = ({ blogs }: Props) => {
  return (
    <>
      <SimpleGrid
        px={4}
        py={5}
        justifyContent={"center"}
        gap={5}
        templateColumns={{
          base: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
          xl: "1fr 1fr 1fr 1fr ",
        }}
      >
        {blogs.map((blogData) => {
          return (
            <Box
              key={blogData._id}
              as={NextLink}
              href={`/blogs/${blogData.slug.current}`}
              pos="relative"
              flexDir="column"
              textColor={"#D9D9D9"}
              bgGradient="linear-gradient(180deg, #001f3f 50%, #001f70 100%)"
              border={"2px solid"}
              borderColor="rgba(0, 31, 63)"
              borderRadius={8}
              boxShadow="0px 0px 12px 0px #000000"
              _hover={{
                //bgGradient: "linear-gradient(180deg, #313140 0%, #1B1B27 100%)",
                borderColor: "#FFE900",
                boxShadow: "0px 0px 12px 0px #1B1B27",
              }}
            >
              {blogData.titleImage.url ? (
                <Flex>
                  <Image
                    src={blogData.titleImage.url}
                    alt={blogData.title}
                    mb={4}
                    objectFit={"cover"}
                    borderTopRadius={7}
                  />
                </Flex>
              ) : null}

              <Heading
                as={NextLink}
                mb={2}
                pb={2}
                fontSize={{ base: "lg", lg: "xl" }}
                noOfLines={2}
                mx={3}
                borderBottom={"2px solid gray"}
                href={`/blogs/${blogData.slug.current}`}
              >
                {blogData.title}
              </Heading>

              <Text
                h={{ base: 16, lg: "4.5rem" }}
                mb={{ base: "4", lg: "8" }}
                textColor={"#A0AEC0"}
                fontSize={{ base: "sm", lg: "md" }}
                noOfLines={3}
                paddingX={4}
              >
                {blogData.description}
              </Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};
