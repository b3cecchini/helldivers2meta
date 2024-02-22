import { Box } from "@chakra-ui/react";
import { sanityClient } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import LoadoutList from "../components/loadoutList";

const loadoutQuery = groq`*[_type == 'loadout' && defined(slug.current)][]{
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

export type Item = {
  name: string;
  _id: string;
  _updatedAt: string;
  slug: {
    current: string;
    _type: string;
  };
  _createdAt: string;
};
export type Strategem = {
  name: string;
  slug: {
    current: string;
    _type: string;
  };
};

export type PlayerLoadout = {
  strategems: Strategem[];
  armorType: Item;
  armorModifier: Item;
  secondary: Item;
  grenade: Item;
  booster: Item;
  primary: Item;
};

export type LoadoutData = {
  name: string;
  slug: {
    current: string;
    _type: string;
  };
  missionType: string[];
  levelRange: number;
  enemyType: string;
  playerLoadout: PlayerLoadout[];
};

export default async function PageLoadouts() {
  const loadoutData: LoadoutData[] = await sanityClient.fetch(loadoutQuery);

  return <LoadoutList data={loadoutData} />;
}
