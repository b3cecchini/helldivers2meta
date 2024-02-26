import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./map/Map"), { ssr: false });

export default async function PageMap() {
  return <MapComponent />;
}
