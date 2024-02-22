import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { sanityClient } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import { TypedObject } from "sanity";
import BlogPage from "./blogPage";

const postQuery = groq`*[_type == 'post' && defined(slug.current)][]`;

export type BlogData = {
  _id: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  title: string;
  description: string;
  content: TypedObject[];
  titleImage: {
    url: string;
    metadata: {
      dimensions: {
        height: number;
        width: number;
        aspectRatio: number;
      };
    };
  };
};

export default async function PageBlogs() {
  const blogData: BlogData[] = await sanityClient.fetch(postQuery);

  return (
    <>
      <Flex justifyContent={"center"} textAlign={"center"}>
        <Text> {JSON.stringify(blogData[0], null, 2)}</Text>
      </Flex>

      <BlogPage blog={blogData[0]} />
    </>
  );
}
