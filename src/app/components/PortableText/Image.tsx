import { Image as ChakraImage, Flex } from "@chakra-ui/react";
import { ImageAsset } from "sanity";
import { urlForImage } from "../../../../sanity/lib/image";

interface Props {
  value: {
    asset: ImageAsset;
  };
}

export const Image = (props: Props) => {
  if (!props.value.asset) return null;
  const url = urlForImage(props.value.asset);

  console.log("IN Image component", url);
  return (
    <Flex justifyContent="center">
      <ChakraImage
        maxW={{ base: "100%", md: "86%" }}
        maxH={{ base: "630px" }}
        mx="auto"
        mb={10}
        alt=""
        src={url}
      />
    </Flex>
  );
};
