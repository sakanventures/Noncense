"use client";

import { useEffect, useState } from 'react';
import { PiXBold, PiAppleLogoBold, PiSpotifyLogoBold, PiYoutubeLogoBold, PiDiscordLogoBold } from "react-icons/pi";

interface SocialData {
  id: number;
  XUrl: string;
  AppleUrl: string;
  SpotifyUrl: string;
  YoutubeUrl: string;
  DiscordUrl: string;
}

interface ApiResponse {
  data: {
    attributes: {
      Social: SocialData;
    }
  }
}

export default function Social() {
  const baseUrl = "http://localhost:1337";
  const [socialData, setSocialData] = useState<SocialData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSocialData = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/global?populate=*`);
        if (!res.ok) {
          throw new Error('Failed to fetch social data');
        }
        const jsonData: ApiResponse = await res.json();
        if (jsonData.data && jsonData.data.attributes.Social) {
          setSocialData(jsonData.data.attributes.Social);
        } else {
          setError('No social data found');
        }
      } catch (error) {
        console.error('Error fetching social data:', error);
        setError('Failed to fetch social data');
      } finally {
        setLoading(false);
      }
    };

    fetchSocialData();
  }, []);

  if (loading) {
    return <div>Loading social links...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!socialData) {
    return <div>No social links found.</div>;
  }

  const { XUrl, AppleUrl, YoutubeUrl, SpotifyUrl, DiscordUrl } = socialData;

  return (
    <div className="flex justify-center space-x-6 bg-white p-4">
      <a href={XUrl} target="_blank" rel="noopener noreferrer">
        <PiXBold className="h-6 w-6 text-black hover:text-blue-500 transition-colors duration-300" />
      </a>

      <a href={AppleUrl} target="_blank" rel="noopener noreferrer">
        <PiAppleLogoBold className="h-6 w-6 text-black hover:text-gray-500 transition-colors duration-300" />
      </a>

      <a href={SpotifyUrl} target="_blank" rel="noopener noreferrer">
        <PiSpotifyLogoBold className="h-6 w-6 text-black hover:text-green-500 transition-colors duration-300" />
      </a>

      <a href={YoutubeUrl} target="_blank" rel="noopener noreferrer">
        <PiYoutubeLogoBold className="h-6 w-6 text-black hover:text-red-500 transition-colors duration-300" />
      </a>

      <a href={DiscordUrl} target="_blank" rel="noopener noreferrer">
        <PiDiscordLogoBold className="h-6 w-6 text-black hover:text-purple-500 transition-colors duration-300" />
      </a>
    </div>
  );
}
