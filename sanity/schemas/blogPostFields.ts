import { defineField } from "sanity";

export const blogPostFields = [
  defineField({
    name: "title",
    title: "Title",
    type: "string",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
      source: "title",
      maxLength: 96,
    },
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "titleImage",
    title: "Title Image",
    type: "image",
    options: {
      hotspot: true,
    },
  }),
  defineField({
    name: "publishedAt",
    title: "Published at",
    type: "datetime",
  }),
  defineField({
    name: "description",
    title: "Description",
    type: "text",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    name: "content",
    title: "Content",
    type: "blogContent",
    validation: (Rule) => Rule.required(),
  }),
];
