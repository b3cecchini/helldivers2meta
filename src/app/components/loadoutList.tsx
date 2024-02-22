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
      <Heading
        as={"h1"}
        textColor={"white"}
        textShadow={`
          -2px 2px 2px #000,
				  2px 2px 2px #000,
				  2px -2px 0 #000,
				  -2px -2px 0 #000;`}
      >
        {" "}
        Helldivers 2 Meta
      </Heading>
      <Flex justifyContent={"center"} mt={8} maxW="83rem">
        <Flex gap={10} alignItems={"center"}>
          <Select
            bgColor={"#E2E8F0"}
            borderRadius={6}
            value={selectedOption}
            onChange={handleSelectChange}
            placeholder="Filter Mission Type"
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
            bgColor={"#E2E8F0"}
            borderRadius={6}
            value={selectedLevelRange}
            onChange={handleLevelSelect}
            placeholder="Filter Level Range"
          >
            <option value={1}> 1-4</option>
            <option value={2}>5-7</option>
            <option value={3}>8-9</option>
          </Select>
        </Flex>
      </Flex>

      <Container py={"2rem"} px={"3rem"} minW={"fit-content"} maxW={"83rem"}>
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
                  pb={"1.5rem"}
                  mb={"2rem"}
                  border={"2px solid red"}
                  pt={1}
                  borderRadius={4}
                  boxShadow={
                    "5px -5px 50px 10px red inset, -5px 0px 50px 10px red inset, 5px 10px 30px 0px red, -10px 0px 30px 0px red"
                  }
                  bgColor={"#001f3f"}
                >
                  <Flex justifyContent={"space-around"} alignItems={"center"}>
                    <Flex
                      bgColor={"black"}
                      transform={"skew(-45deg)"}
                      px={4}
                      borderX={"10px solid red"}
                    >
                      <Text
                        fontSize={26}
                        fontWeight={"500"}
                        color={"#F2F2F2"}
                        textTransform={"uppercase"}
                        letterSpacing={"2px"}
                        textAlign={"start"}
                        noOfLines={1}
                        transform={"skew(45deg)"}
                      >
                        {loadout?.name}
                      </Text>
                    </Flex>

                    <Flex gap={4} fontSize={18} mx={"1rem"}>
                      <Text my={0}> Level Range: </Text>
                      <Text textColor={"#F5C400"} my={0}>
                        {" "}
                        {loadout.levelRange == 1
                          ? "1-4"
                          : loadout.levelRange == 2
                          ? "5-7"
                          : "8-9"}
                      </Text>
                    </Flex>
                    <Flex gap={4} fontSize={18} mx={"1rem"}>
                      <Text my={0}> Enemy Type: </Text>
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
