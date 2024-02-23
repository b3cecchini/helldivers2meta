"use client";
import {
  Box,
  Container,
  HStack,
  Heading,
  Stack,
  Image,
} from "@chakra-ui/react";

import { PortableText } from "@portabletext/react";
import React from "react";
import { portableTextUIComponents } from "../components/PortableText/PortableTextComponents";
import { BlogData } from "./page";
import dayjs from "dayjs";

interface Props {
  blog: BlogData;
}
export default function Blog({ blog }: Props) {
  return (
    <Container
      mt={"1rem"}
      backdropFilter={"brightness(50%)"}
      borderRadius={8}
      textColor={"#e4e4e4"}
      pt={"2rem"}
      px={{ base: "1rem", lg: "3rem" }}
      maxW={"986px"}
    >
      <Heading as="h1" fontStyle={"italic"} fontWeight={"bold"}>
        {blog.title}
      </Heading>
      <Stack
        as="header"
        position="relative"
        align="center"
        pt={"1rem"}
        mb="2rem"
        bgGradient="linear(to-b, gray.700 0, textSecondary.700 100%)"
      >
        <HStack
          maxWidth="968px"
          fontSize={{ base: ".75rem", lg: "xs" }}
          letterSpacing="2px"
        >
          <Box>{dayjs(blog?.publishedAt).format("MM/DD/YYYY")}</Box>
        </HStack>
        {blog.titleImage && (
          <Box
            position="relative"
            maxWidth="968px"
            mt="2rem"
            boxShadow="dark-lg"
            rounded="md"
          >
            <Image src={blog.titleImage?.url} alt={blog.title} />
          </Box>
        )}
      </Stack>
      <PortableText
        value={blog.content}
        components={portableTextUIComponents}
      />
    </Container>
  );
}
