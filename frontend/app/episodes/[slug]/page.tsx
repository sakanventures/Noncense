"use client";

import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";
import { Separator } from '@/components/ui/separator';
import Platform from "@/components/custom/platform"

interface RichTextBlock {
  type: string;
  children: { type: string; text: string }[];
}

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

interface PlatformProps {
  id: number;
  AppleUrl: string;
  SpotifyUrl: string;
  RssUrl: string;
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
    Featured: {
      data: ImageData[];
    };
    RichTextBlock: RichTextBlock[];
    VideoID: string;
    Episode: number;
    Platform: PlatformProps[];
  };
}

interface EpisodeAPIProps {
  data: EpisodeProps[];
}

export default function EpisodeData() {
  const baseUrl = "http://localhost:1337";
  const { slug } = useParams();
  const [episodeProps, setEpisodeProps] = useState<EpisodeProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const res = await fetch(
          `${baseUrl}/api/episodes?filters[Slug][$eq]=${slug}&populate=*`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch blog post');
        }
        const result: EpisodeAPIProps = await res.json();
        if (result.data.length > 0) {
          setEpisodeProps(result.data[0]); // Assuming there's only one blog post with the provided slug
        } else {
          setError('Blog post not found');
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError('Failed to fetch blog post');
      }
    };

    if (slug) {
      fetchEpisode();
    }
  }, [slug]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!episodeProps) {
    return <div>Loading...</div>;
  }

  const streamUrl = episodeProps.attributes.VideoID;
  const content: BlocksContent = episodeProps.attributes.RichTextBlock as unknown as BlocksContent;

  // Convert the createdAt timestamp to MM/DD/YYYY format
  // const formatDate = (timestamp: string) => {
  //   const date = new Date(timestamp);
  //   const month = date.getMonth() + 1; // getMonth() is zero-based
  //   const day = date.getDate();
  //   const year = date.getFullYear();
  //   return `${month}/${day}/${year}`;
  // };

  // Convert the createdAt timestamp to "Month Day, Year" format
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const formattedDate = formatDate(episodeProps.attributes.createdAt);

  return (
    <div className="w-full">

      <section className="w-full bg-gray-950 py-12 md:py-24 lg:py-32">
        <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-50">Episode {episodeProps.attributes.Episode}</div>
            <h1 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-4xl md:text-5xl lg:text-6xl">
              {episodeProps.attributes.Title}
            </h1>
            <div className="flex items-center gap-3 text-gray-400">
              <div className="flex items-center gap-2">
                <img src="/placeholder.svg" width="32" height="32" alt="Guest Avatar" className="rounded-full" />
                <span>John Doe</span>
              </div>
              <Separator className="h-4 w-px bg-gray-700" />
              <div>{formattedDate}</div>
            </div>
            <p className="max-w-[600px] text-gray-400">
              <BlocksRenderer content={content}/>
            </p>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe 
              width="560" 
              height="315" 
              src={`https://www.youtube.com/embed/${streamUrl}`}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
              </iframe>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-tighter text-gray-950 dark:text-gray-50">Episode Audio</h2>
            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
            <Platform platformData={episodeProps.attributes.Platform}/>
            </div>
          </div>
          
        </div>
      </section>

      <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container">
          <div className="mb-8 px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter text-gray-950 dark:text-gray-50">Related Episodes</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-6">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                width="300"
                height="200"
                alt="Related Episode"
                className="w-full h-[200px] object-cover"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="text-lg font-bold text-gray-950 dark:text-gray-50">
                  Episode 41: The Rise of Generative AI
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  In this episode, we discuss the latest advancements in generative AI and its potential impact on
                  various industries.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                width="300"
                height="200"
                alt="Related Episode"
                className="w-full h-[200px] object-cover"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="text-lg font-bold text-gray-950 dark:text-gray-50">
                  Episode 40: The Future of Remote Work
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We explore the long-term implications of the shift to remote work and the technologies shaping the
                  future of work.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                width="300"
                height="200"
                alt="Related Episode"
                className="w-full h-[200px] object-cover"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="text-lg font-bold text-gray-950 dark:text-gray-50">
                  Episode 39: The Metaverse Explained
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  In this episode, we dive deep into the concept of the metaverse and its potential to transform our
                  digital experiences.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                width="300"
                height="200"
                alt="Related Episode"
                className="w-full h-[200px] object-cover"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="text-lg font-bold text-gray-950 dark:text-gray-50">
                  Episode 38: The Future of Sustainable Energy
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We explore the latest advancements in renewable energy technologies and their potential to shape a
                  more sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
