"use client";
import { Container } from "@chakra-ui/react";
import { PortableText } from "@portabletext/react";
import React from "react";
import { portableTextUIComponents } from "../components/PortableText/PortableTextComponents";
import { BlogData } from "./page";

interface Props {
  blog: BlogData;
}
export default function BlogPage({ blog }: Props) {
  return (
    <Container
      maxWidth="3xl"
      mt={"5rem"}
      backdropFilter={"brightness(50%)"}
      borderRadius={8}
    >
      <PortableText
        value={blog.content}
        components={portableTextUIComponents}
      />
    </Container>
  );
}
