import Featured from "@/components/custom/featured";
import Feed from "@/components/custom/feed";
import Ad from "@/components/custom/advertisement";
import Podcast from "@/components/custom/podcast";
import Meta from "@/components/custom/meta";
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <>
      <Featured />
      <Feed />
      <Ad/>
      <Podcast />
      <Separator className="mb-14"/>
      <Meta />
    </>
  );
}
