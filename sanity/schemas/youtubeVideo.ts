import { defineField, defineType } from "sanity";

//import { YoutubeEmbed } from "@/app/components/PortableText/YoutubeEmbed";

export default defineType({
  name: "youtubeVideo",
  type: "object",
  title: "YouTube Embed",
  fields: [
    defineField({
      name: "url",
      type: "url",
      title: "YouTube video URL",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ["https"],
        }),
    }),
  ],
  preview: {
    select: {
      url: "url",
    },
  },
  // components: {
  //   preview: YouTubeEmbed,
  // },
});
