"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";

interface AdProps {
  id: number;
  attributes: {
    Advertisement: {
      id: number;
      Title: string;
      Description: string;
      Url: string;
      ImageUrl: string;
    };
  };
}

interface AdAPI {
  data: AdProps[];
}

export default function Advertisement() {
  const baseUrl = "http://localhost:1337";
  const [adData, setAdData] = useState<AdProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/global?populate=*`);
        if (!res.ok) {
          throw new Error('Failed to fetch advertisements');
        }
        const jsonData: AdAPI = await res.json();
        const adData: AdProps[] = jsonData.data || [];
        setAdData(adData);
      } catch (error) {
        console.error('Error fetching advertisements:', error);
        setError('Failed to fetch advertisements');
      } finally {
        setLoading(false);
      }
    };

    fetchAd();
  }, []);

  if (loading) {
    return <div>Loading advertisements...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex justify-center pt-12">
      {adData.length > 0 ? (
        adData.map((data) => (
          <a
            key={data.id}
            href={data.attributes.Advertisement.Url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[1446px] h-[100px] rounded-lg overflow-hidden"
          >
            <Image
              src={baseUrl+data.attributes.Advertisement.ImageUrl || "/placeholder.svg"}
              alt="Ad Banner"
              width={1446}
              height={100}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 flex items-center justify-center text-center px-8">
              <div className="space-y-2">
                <h2 className="text-4xl font-extrabold tracking-tight text-white">
                  {data.attributes.Advertisement.Title}
                </h2>
                <p className="text-xl text-gray-300">
                  {data.attributes.Advertisement.Description}
                </p>
              </div>
            </div>
          </a>
        ))
      ) : (
        <div>No advertisements found.</div>
      )}
    </div>
  );
}
