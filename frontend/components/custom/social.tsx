import { PiXBold, PiAppleLogoBold, PiSpotifyLogoBold, PiYoutubeLogoBold, PiDiscordLogoBold } from "react-icons/pi";

export default function Social() {
    return (
      <div className="flex justify-center space-x-6 bg-white p-4">
        <PiXBold className="h-6 w-6 text-black hover:text-blue-500 transition-colors duration-300" />
        <PiAppleLogoBold className="h-6 w-6 text-black hover:text-gray-500 transition-colors duration-300" />
        <PiSpotifyLogoBold className="h-6 w-6 text-black hover:text-green-500 transition-colors duration-300" />
        <PiYoutubeLogoBold className="h-6 w-6 text-black hover:text-red-500 transition-colors duration-300" />
        <PiDiscordLogoBold className="h-6 w-6 text-black hover:text-purple-500 transition-colors duration-300" />
      </div>
    )
  }