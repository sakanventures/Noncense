"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";

interface AdProps {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    Url: string;
    Image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export default function Advertisement() {
  const baseUrl = "http://localhost:1337";
  const [adData, setAdData] = useState<AdProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/advertisement?populate=*`);
        if (!res.ok) {
          throw new Error('Failed to fetch advertisements');
        }
        const jsonData = await res.json();
        const adData: AdProps = jsonData.data;
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

  if (!adData) {
    return <div>No advertisement found.</div>;
  }

  return (
    <div className="flex justify-center pt-12">
     <a
            key={adData.id}
            href={adData.attributes.Url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[1446px] h-[100px] rounded-lg overflow-hidden"
          >
            <img
              src={`http://localhost:1337${adData.attributes.Image.data.attributes.url}` || "/placeholder.svg"}
              alt="Ad Banner"
              width={1446}
              height={100}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 flex items-center justify-center text-center px-8">
              <div className="space-y-2">
                <h2 className="text-4xl font-extrabold tracking-tight text-white">
                  {adData.attributes.Title}
                </h2>
                <p className="text-xl text-gray-300">
                  {adData.attributes.Description}
                </p>
              </div>
            </div>
          </a>
    </div>
  );
}
