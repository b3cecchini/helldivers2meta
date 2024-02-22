import { defineType } from "sanity";
import { blogPostFields } from "./blogPostFields";
export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: blogPostFields,
  preview: {
    select: {
      title: "title",
      media: "titleImage",
      description: "description",
    },
  },
});
