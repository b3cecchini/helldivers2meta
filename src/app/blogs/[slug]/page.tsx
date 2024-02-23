import { groq } from "next-sanity";
import React from "react";
import { sanityClient } from "../../../../sanity/lib/client";
import { BlogData } from "../page";
import Blog from "../blogPage";
import { Text } from "@chakra-ui/react";

const getPostQuery = groq`*[_type == 'post' && slug.current == $slug]{
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
  }[0]`;

export default async function BlogPageBase({
  params,
}: {
  params: { slug: string };
}) {
  console.log("==> slug: " + params.slug);
  const blogData: BlogData = await sanityClient.fetch(getPostQuery, {
    slug: params.slug,
  });

  return <Blog blog={blogData} />;
}
