import { FC } from "react";
import { Box, List, ListItem, OrderedList } from "@chakra-ui/react";
import {
  PortableTextComponentProps,
  PortableTextListItemComponent,
  ReactPortableTextList,
} from "@portabletext/react";
import { PortableTextBlock } from "sanity";

export type Block = FC<PortableTextComponentProps<PortableTextBlock>>;

export const bullet: PortableTextListItemComponent = ({ children }) => (
  <ListItem
    alignItems="flex-start"
    display="flex"
    marginBottom={4}
    marginLeft={{ base: 2, lg: 7 }}
    _before={{
      content: "''",
      width: "7px",
      height: "7px",
      backgroundColor: "#FFE900",
      display: "block",
      margin: "0.75rem 1rem",
      borderRadius: "50%",
      flexShrink: "0",
    }}
  >
    <Box textAlign={"start"}>{children}</Box>
  </ListItem>
);

export const number: PortableTextListItemComponent = ({ children }) => (
  <ListItem marginBottom={4} marginLeft="1.5rem">
    {children}
  </ListItem>
);

export const ListBullet: FC<
  PortableTextComponentProps<ReactPortableTextList>
> = ({ children }) => (
  <List
    sx={{ ul: { mt: 6 } }}
    marginBottom="2rem"
    fontSize="lg"
    lineHeight="155%"
  >
    {children}
  </List>
);

export const ListNumber: FC<
  PortableTextComponentProps<ReactPortableTextList>
> = ({ children }) => (
  <OrderedList marginBottom="2rem" fontSize="lg" lineHeight="155%">
    {children}
  </OrderedList>
);
