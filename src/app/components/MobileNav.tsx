import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Flex, FlexProps, IconButton } from "@chakra-ui/react";

interface Props extends FlexProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileNav = ({ isOpen, onToggle, ...rest }: Props) => {
  return (
    <Flex flexDir="column" pos={"relative"} {...rest}>
      <IconButton
        _hover={{
          background: "rgba(255, 255, 255, 0.05)",
        }}
        aria-label={"Open Nav"}
        icon={
          isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
        }
        onClick={onToggle}
      />
    </Flex>
  );
};
