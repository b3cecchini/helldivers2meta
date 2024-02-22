import { Heading } from "@chakra-ui/react";
import { PortableTextBlockComponent } from "@portabletext/react";

export const Heading3: PortableTextBlockComponent = ({ children }) => {
  return (
    <Heading as="h3" mb={4} size="md">
      {children}
    </Heading>
  );
};
