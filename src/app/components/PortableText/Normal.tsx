import { Text } from "@chakra-ui/react";
import { PortableTextBlockComponent } from "@portabletext/react";

export const Normal: PortableTextBlockComponent = ({ children }) => {
  return (
    <Text
      mb={8}
      textColor="#e8e8e8"
      fontSize={{ base: 14, lg: 20 }}
      lineHeight="160%"
    >
      {children}
    </Text>
  );
};
