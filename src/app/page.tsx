import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
  Tooltip,
  Image,
} from "@chakra-ui/react";
import { LoadoutData } from "./loadouts/page";
import { sanityClient } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import NextLink from "next/link";

const firstLoadoutQuery = groq`*[_type == 'loadout' && defined(slug.current)]{
  _id,
  _updatedAt,
  slug,
  missionType,
  _type,
  name,
  _createdAt,
  _rev,
  levelRange,
  enemyType,
  playerLoadout[]{
    armorType ->,
    armorModifier ->,
    secondary ->,
    grenade ->,
    booster ->,
    primary ->,
    _key,
    strategems[] -> 
  }
}`;

const disclaimerText = `This is a fan-made site. We are in no way affiliated, associated, endorsed by, or in any way officially connected to Arrowhead Studios (the creator of Helldivers 2), 
  or any of its subsidiaries or affiliates. The official Arrowhead Studios website can be found here:`;

const disclaimerLink = `https://www.arrowheadgamestudios.com/`;

const summaryText = `As massive fans of Helldivers 2, we built this site as a community resource for players to find loadouts in their quest to spread democracy! 
    While we encourage running what you find to be the most fun, we are providing these loadout recommendations to players looking to maximize their combat effectiveness in specific scenarios. Think of our loadouts as high-level “Brasch Tactics!” 
    We hope to expand the site over time providing new features and functionality to Helldivers 2 fans as the game continues to grow including ongoing guides, the ability to upload loadouts, share them with your friends, and post them for others to see. 
    For now, check out the starter and high-level gear in the "Loadouts" tab while we continue to liberate the surrounding systems of Super Earth! `;

const articleText = `Follow us and stay up to date on all info Helldivers 2! We will be posting articles for in game guides as well as news regarding updates or additions to the game.`;

export default async function Home() {
  const loadoutData: LoadoutData[] = await sanityClient.fetch(
    firstLoadoutQuery
  );

  return (
    <Flex justifyContent={"center"} flexDir={"column"}>
      <Heading
        mt={{ base: 8, md: 0 }}
        as={"h1"}
        textColor={"white"}
        textShadow={`
          -2px 2px 2px #000,
				  2px 2px 2px #000,
				  2px -2px 0 #000,
				  -2px -2px 0 #000;`}
      >
        {" "}
        Welcome Helldivers!
      </Heading>
      <Container
        my={"1rem"}
        backdropFilter={"brightness(50%)"}
        borderRadius={8}
        textColor={"#e4e4e4"}
        py={"1rem"}
        px={{ base: "1rem", lg: "3rem" }}
        maxW={"986px"}
      >
        <Flex mb={10} mt={3}>
          <Text fontWeight={500}>{summaryText}</Text>
        </Flex>
        <Box>
          <Text color="red" fontWeight={"bold"}>
            DISCLAIMER
          </Text>
          <Text fontSize={14}>
            {" "}
            {disclaimerText}{" "}
            <Link
              textDecor={"underline"}
              _hover={{ textColor: "#FFE900" }}
              href={disclaimerLink}
            >
              {disclaimerLink}
            </Link>{" "}
          </Text>
        </Box>
      </Container>

      <Heading
        mt={7}
        mb={4}
        textColor={"white"}
        textShadow={`
          -2px 2px 2px #000,
				  2px 2px 2px #000,
				  2px -2px 0 #000,
				  -2px -2px 0 #000;`}
      >
        <Text
          as={NextLink}
          href={"/map"}
          _hover={{
            color: "#FFE900",
            textDecoration: "none",
          }}
        >
          Click Here To View The Galactic War Progress!
        </Text>
      </Heading>

      <Heading
        mt={7}
        mb={4}
        textColor={"white"}
        textShadow={`
          -2px 2px 2px #000,
				  2px 2px 2px #000,
				  2px -2px 0 #000,
				  -2px -2px 0 #000;`}
      >
        {" "}
        <Text
          as={NextLink}
          href={"/loadouts"}
          _hover={{
            color: "#FFE900",
            textDecoration: "none",
          }}
        >
          View Loadouts Here!{" "}
        </Text>
      </Heading>

      <Container
        as={NextLink}
        href={"/loadouts"}
        textColor={"#D9D9D9"}
        pb={"0.75rem"}
        mb={"2rem"}
        border={"2px solid red"}
        pt={1}
        borderRadius={4}
        boxShadow={"5px -5px 50px 10px red inset"}
        //-5px 0px 50px 10px red inset, 5px 10px 30px 0px red, -10px 0px 30px 0px red
        //bgColor={"#001f3f"}
        bgColor={"rgba(0, 31, 63, 0.6)"}
        backdropFilter={"blur(2px)"}
        maxW={"87rem"}
        justifyContent={"center"}
      >
        <Flex
          justifyContent={"space-around"}
          alignItems={"center"}
          flexDir={{ base: "column", md: "row" }}
        >
          <Flex
            bgColor={"rgba(0, 0, 0, 0.7)"}
            transform={"skew(-45deg)"}
            px={{ base: 4, lg: 4 }}
            mx={{ base: 7, lg: 0 }}
            mb={{ base: 3, lg: 0 }}
            borderX={"10px solid"}
            borderColor={"#FF0000"}
          >
            <Text
              fontSize={{ base: 20, md: 26 }}
              fontWeight={"500"}
              color={"#F2F2F2"}
              textTransform={"uppercase"}
              letterSpacing={"2px"}
              textAlign={{ base: "center", lg: "start" }}
              transform={"skew(45deg)"}
            >
              {loadoutData[0].name}
            </Text>
          </Flex>

          <Flex
            gap={2}
            fontSize={18}
            bgColor={"rgba(0, 0, 0, .4)"}
            px={2}
            borderRadius={5}
            mb={{ base: 2, lg: 0 }}
          >
            <Text my={0} textColor={"white"}>
              {" "}
              Level Range:{" "}
            </Text>
            <Flex>
              <Text textColor={"#F5C400"} my={0}>
                {" "}
                {loadoutData[0].levelRange == 1
                  ? "1-4"
                  : loadoutData[0].levelRange == 2
                  ? "5-7"
                  : "8-9"}
              </Text>
            </Flex>
          </Flex>
          <Flex
            gap={2}
            fontSize={18}
            bgColor={"rgba(0, 0, 0, .4)"}
            px={2}
            borderRadius={5}
          >
            <Text my={0} textColor={"white"}>
              {" "}
              Enemy Type:{" "}
            </Text>
            <Text textColor={"#F5C400"} my={0}>
              {" "}
              {loadoutData[0].enemyType}
            </Text>
          </Flex>
        </Flex>

        <SimpleGrid
          px={4}
          py={5}
          justifyContent={"center"}
          gap={5}
          templateColumns={{
            base: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          }}
        >
          {loadoutData[0].playerLoadout.map((playerLoadout, index) => {
            return (
              <Box
                key={playerLoadout + "_" + index}
                pos={"relative"}
                background={`repeating-linear-gradient(45deg, #404040, #282828 10%, #AAAAAA 10%)`}
                borderRadius={8}
                border={"1px solid black"}
                boxShadow={"0px 4px 8px rgba(0.5, 0, 0, 0.3)"}
                py={4}
                px={4}
              >
                <Flex justifyContent={"space-between"}>
                  <Flex flexDir={"column"} justifyContent={"space-around"}>
                    <Tooltip
                      label={playerLoadout.primary.name}
                      p={4}
                      fontSize={12}
                      fontWeight={"bold"}
                      bgColor={"#B3B3B3"}
                      borderRadius={8}
                    >
                      <Image
                        display={"flex"}
                        alignSelf={"start"}
                        alt={playerLoadout.primary.name}
                        src={`/images/primary/${playerLoadout.primary.slug.current}.png`}
                        w={"85px"}
                        border={"1px solid"}
                        borderColor={"#F5C400"}
                      />
                    </Tooltip>
                    <Tooltip
                      label={playerLoadout.secondary.name}
                      p={4}
                      fontSize={12}
                      fontWeight={"bold"}
                      bgColor={"#B3B3B3"}
                      borderRadius={8}
                    >
                      <Image
                        display={"flex"}
                        alignSelf={"start"}
                        alt={playerLoadout.secondary.name}
                        src={`/images/secondary/${playerLoadout.secondary.slug.current}.png`}
                        w={"85px"}
                        border={"1px solid"}
                        borderColor={"#F5C400"}
                      />
                    </Tooltip>
                  </Flex>
                  <Flex
                    flexDir={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Tooltip
                      label={playerLoadout.armorType.name}
                      p={4}
                      fontSize={12}
                      fontWeight={"bold"}
                      bgColor={"#B3B3B3"}
                      borderRadius={8}
                    >
                      <Image
                        alt={playerLoadout.armorType.name}
                        src={`/images/armor/hd2-armor.png`}
                        w={"90px"}
                        h={"90"}
                        border={"1px solid"}
                        borderColor={"#F5C400"}
                      />
                    </Tooltip>
                    <Flex
                      bgColor={"#121212"}
                      border={"1px solid black"}
                      w={"100%"}
                    >
                      <Text
                        textColor={"#F5C400"}
                        fontSize={10}
                        w={"100%"}
                        py={2}
                        px={2}
                      >
                        {" "}
                        {playerLoadout.armorModifier.name}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    flexDir={"column"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                    right={0}
                  >
                    <Tooltip
                      label={playerLoadout.grenade.name}
                      p={4}
                      fontSize={12}
                      fontWeight={"bold"}
                      bgColor={"#B3B3B3"}
                      borderRadius={8}
                    >
                      <Image
                        alt={playerLoadout.grenade.name}
                        src={`/images/grenade/${playerLoadout.grenade.slug.current}.png`}
                        w={"50px"}
                        h={"50px"}
                        border={"1px solid"}
                        borderColor={"#F5C400"}
                      />
                    </Tooltip>
                    <Flex
                      bgColor={"#F5C400"}
                      clipPath={
                        "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                      }
                      h={"57px"}
                      w={"58px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Tooltip
                        label={playerLoadout.booster?.name}
                        p={4}
                        fontSize={12}
                        fontWeight={"bold"}
                        bgColor={"#B3B3B3"}
                        borderRadius={8}
                      >
                        <Image
                          alt={playerLoadout.booster?.name}
                          src={`/images/strategems/${playerLoadout.strategems[0]
                            .slug.current!}.png`}
                          borderColor={"#F5C400"}
                          clipPath={
                            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                          }
                          h={"55px"}
                          w={"55px"}
                        />
                      </Tooltip>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex justifyContent={"space-between"} pt={2}>
                  {playerLoadout.strategems.map((strategem, index) => {
                    return (
                      <Flex
                        flexDir={"row"}
                        key={strategem + "_" + index}
                        border={"1px solid"}
                        borderColor={"#F5C400"}
                      >
                        <Tooltip
                          label={strategem.name}
                          p={4}
                          fontSize={12}
                          fontWeight={"bold"}
                          bgColor={"#B3B3B3"}
                          borderRadius={8}
                        >
                          <Image
                            alt={strategem.name}
                            src={`/images/strategems/${strategem.slug
                              .current!}.png`}
                          />
                        </Tooltip>
                      </Flex>
                    );
                  })}
                </Flex>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>

      <Heading
        mt={7}
        mb={2}
        textColor={"white"}
        textShadow={`
          -2px 2px 2px #000,
				  2px 2px 2px #000,
				  2px -2px 0 #000,
				  -2px -2px 0 #000;`}
      >
        {" "}
        <Text
          as={NextLink}
          href={"/blogs"}
          _hover={{
            color: "#FFE900",
            textDecoration: "none",
          }}
        >
          Check Out Our Articles!
        </Text>
      </Heading>

      <Container
        backdropFilter={"brightness(50%)"}
        borderRadius={8}
        textColor={"#e4e4e4"}
        py={"1rem"}
        px={{ base: "1rem", lg: "3rem" }}
        maxW={"986px"}
      >
        <Box>
          <Text fontSize={14}>
            {" "}
            {articleText}{" "}
            <Link
              as={NextLink}
              textDecor={"underline"}
              _hover={{ textColor: "#FFE900" }}
              href={"/blogs"}
            >
              View Blogs Here!
            </Link>{" "}
          </Text>
        </Box>
      </Container>
    </Flex>
  );
}
