import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaApple, FaSpotify, FaRss } from "react-icons/fa6";

interface PlatformProps {
  id: number;
  AppleUrl: string;
  SpotifyUrl: string;
  RssUrl: string;
}

interface PlatformAPI {
  platformData: PlatformProps[];
}

export default function Platforms({ platformData }: PlatformAPI) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-2">
      {platformData.map((data) => (
        <div key={data.id} className="w-full max-w-xs">
        <Button className="flex items-center justify-center w-full rounded-full bg-[#FA57C1] text-white p-6 mb-6">
            <Link href={data.AppleUrl} className="flex items-center">
                <FaApple className="mr-2 h-6 w-6" />
                Listen on Apple Podcasts
            </Link>
        </Button>

        <Button className="flex items-center justify-center w-full rounded-full bg-[#1DB954] text-white p-6 mb-6">
          <Link href={data.SpotifyUrl} className="flex items-center">
            <FaSpotify className="mr-2 h-6 w-6" />
            Listen on Spotify
            </Link>
        </Button>

          <Button className="flex items-center justify-center w-full rounded-full bg-[#FF9900] text-white p-6">
          <Link href={data.SpotifyUrl} className="flex items-center">
            <FaRss className="mr-2 h-6 w-6" />
            Subscribe via RSS
            </Link>
          </Button>
        </div>
      ))}
    </div>
  );
}
