import { Text } from "@chakra-ui/react";
import { PortableTextBlockComponent } from "@portabletext/react";

export const Normal: PortableTextBlockComponent = ({ children }) => {
  return (
    <Text maxW="3xl" mb={8} textColor="#e8e8e8" fontSize={22} lineHeight="180%">
      {children}
    </Text>
  );
};
