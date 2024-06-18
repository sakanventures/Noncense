"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from 'react';

interface ImageData {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        url: string;
      };
      small: {
        url: string;
      };
      medium: {
        url: string;
      };
      large: {
        url: string;
      };
    };
    url: string;
  };
}

interface EpisodeProps {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    Slug: string;
    Title: string;
    Description: string;
    Category: string;
    Tab: string;
    Thumbnail: {
      data: ImageData;
    };
    VideoID: string;
    Episode: number;
  };
}

export default function EpisodeData() {
  const baseUrl = "http://localhost:1337";
  const [episodeProps, setEpisodeProps] = useState<EpisodeProps[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const res = await fetch(
          `${baseUrl}/api/episodes?sort=publishedAt:desc&populate=*`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch podcast post');
        }
        const jsonData = await res.json();
        const postData: EpisodeProps[] = jsonData.data;
        setEpisodeProps(postData);
      } catch (error) {
        setError('Podcast post not found');
      } finally {
        setLoading(false);
      }
    };

    fetchEpisode();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!episodeProps) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1446px] grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <h2 className="text-2xl font-bold tracking-tight">More Episodes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
          {episodeProps.map((episode) => {
            const thumbnail = episode.attributes.Thumbnail.data.attributes.url || "/placeholder.svg";
            return (
              <div key={episode.id} className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg shadow-lg">
                <Link href={`/episodes/${episode.attributes.Slug}`} className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <Image
                  src={baseUrl+thumbnail}
                  alt={episode.attributes.Thumbnail.data.attributes.alternativeText || "Episode Image"}
                  width={330}
                  height={480}
                  className="[grid-area:stack] object-cover w-full h-full"
                />
                <div className="flex-1 [grid-area:stack] transition-opacity text-white p-6 justify-end flex flex-col gap-2">
                  <h5 className="font-semibold text-lg tracking-tight">{episode.attributes.Title}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
