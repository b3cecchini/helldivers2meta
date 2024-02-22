"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { AspectRatio } from "@chakra-ui/react";
import getYouTubeID from "get-youtube-id";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface Props {
  value: {
    url: string;
  };
}

export default function YoutubeEmbed(props: Props) {
  const { url } = props.value;
  const id = getYouTubeID(url);
  return (
    <>
      <AspectRatio maxW="1920px" mb={10} ratio={16 / 9}>
        {url && <LiteYouTubeEmbed id={id!} title="YouTube Embed" />}
      </AspectRatio>
    </>
  );
}
