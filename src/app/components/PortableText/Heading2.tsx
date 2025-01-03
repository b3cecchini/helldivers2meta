import { Heading } from "@chakra-ui/react";
import { PortableTextBlockComponent } from "@portabletext/react";

export const Heading2: PortableTextBlockComponent = ({ children }) => {
  return (
    <Heading as="h2" mb={8} size="lg">
      {children}
    </Heading>
  );
};
