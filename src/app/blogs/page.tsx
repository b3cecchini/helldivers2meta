import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { sanityClient } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import { TypedObject } from "sanity";
import BlogPage from "./blogPage";

const postQuery = groq`*[_type == 'post' && defined(slug.current)][]{
  ...,
  _id,
  title,
  slug,
  description,
  publishedAt,
  "titleImage": titleImage.asset->{
    metadata,
    url
  },

}`;

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

  return <BlogPage blog={blogData[0]} />;
}
