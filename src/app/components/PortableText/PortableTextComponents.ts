import { PortableTextComponents } from "@portabletext/react";

import { Heading2 } from "./Heading2";
import { Heading3 } from "./Heading3";
import { Image } from "./Image";
import { Link } from "./Link";
import { bullet, ListBullet, ListNumber, number } from "./Lists";
import { Normal } from "./Normal";
import YoutubeEmbed from "./YoutubeEmbed";

export const portableTextUIComponents: PortableTextComponents = {
  block: {
    normal: Normal,
    h2: Heading2,
    h3: Heading3,
  },
  list: {
    bullet: ListBullet,
    number: ListNumber,
  },
  listItem: {
    bullet,
    number,
  },
  types: {
    image: Image,
    youtubeVideo: YoutubeEmbed,
  },
  marks: {
    link: Link,
  },
};
