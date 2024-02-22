import { PortableTextMarkComponentProps } from "@portabletext/react";
import { TypedObject } from "sanity";

import NextLink from "next/link";

type Props = PortableTextMarkComponentProps<TypedObject & { href: string }>;

export const Link = ({ children, value }: Props) => {
  return (
    <NextLink color="blue" href={value?.href ?? "/"}>
      {children}
    </NextLink>
  );
};
