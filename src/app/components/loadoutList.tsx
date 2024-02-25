"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  Image,
  Tooltip,
  Select,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { LoadoutData } from "../loadouts/page";
import { missonTypeList } from "../../../sanity/schemas/missionTypeList";

interface Props {
  data: LoadoutData[];
}
export default function LoadoutList({ data }: Props) {
  const [selectedOption, setSelectedOption] = useState("");

  const [selectedLevelRange, setSelectedLevelRange] = useState(0);

  const handleSelectChange = (e: any) => {
    setSelectedOption(e.target.value);
  };
  const handleLevelSelect = (e: any) => {
    setSelectedLevelRange(e.target.value);
  };

  return (
    <>
      <Container px={{ base: "none", lg: "3rem" }} maxW={"87rem"}>
        <Heading
          mt={{ base: 3, md: 0 }}
          as={"h1"}
          textColor={"white"}
          textShadow={`
          -2px 2px 2px #000,
				  2px 2px 2px #000,
				  2px -2px 0 #000,
				  -2px -2px 0 #000;`}
        >
          {" "}
          Helldivers 2 Loadouts
        </Heading>
        <Flex
          justifyContent={{ base: "center", lg: "end" }}
          my={{ base: 4, md: 8 }}
        >
          <Flex gap={6} alignItems={"center"}>
            <Select
              p={1}
              bgColor={"rgba(255, 255, 255, .7)"}
              borderRadius={6}
              value={selectedOption}
              onChange={handleSelectChange}
              placeholder="Mission Type"
              borderColor={"rgba(0, 0, 0, .4)"}
            >
              {missonTypeList.map((option, index) => {
                return (
                  <option key={"filter_option_" + index} value={option.value}>
                    {option.title}
                  </option>
                );
              })}
            </Select>
            <Select
              bgColor={"rgba(255, 255, 255, .7)"}
              borderRadius={6}
              value={selectedLevelRange}
              onChange={handleLevelSelect}
              placeholder="Level Range"
              borderColor={"rgba(0, 0, 0, .4)"}
            >
              <option value={1}> 1-4</option>
              <option value={2}>5-7</option>
              <option value={3}>8-9</option>
            </Select>
          </Flex>
        </Flex>

        {data.map((loadout, index) => {
          if (
            selectedOption === "" ||
            loadout.missionType.includes(selectedOption)
          ) {
            if (
              selectedLevelRange == 0 ||
              selectedLevelRange == loadout.levelRange
            )
              return (
                <Box
                  key={loadout.slug.current}
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
                        {loadout?.name}
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
                          {loadout.levelRange == 1
                            ? "1-4"
                            : loadout.levelRange == 2
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
                        {loadout.enemyType}
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
                    {loadout.playerLoadout.map((playerLoadout, index) => {
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
                            <Flex
                              flexDir={"column"}
                              justifyContent={"space-around"}
                            >
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
                                    src={`/images/strategems/${playerLoadout
                                      .strategems[0].slug.current!}.png`}
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
                            {playerLoadout.strategems.map(
                              (strategem, index) => {
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
                                        src={`/images/strategems/${strategem
                                          .slug.current!}.png`}
                                      />
                                    </Tooltip>
                                  </Flex>
                                );
                              }
                            )}
                          </Flex>
                        </Box>
                      );
                    })}
                  </SimpleGrid>
                </Box>
              );
          }
        })}
      </Container>
    </>
  );
}
