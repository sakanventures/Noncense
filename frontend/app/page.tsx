import Image from "next/image";
import Featured from "@/components/custom/featured"
import Feed from "@/components/custom/feed"
import Ad from "@/components/custom/advertisement"
import Podcast from "@/components/custom/podcast"
import Meta from "@/components/custom/meta"

export default function Home() {
  return (
    <>
      <Featured/>
      <Feed/>
      <Ad/>
      <Podcast/>
      <Meta/>
    </>
  );
}
