"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

interface FeaturedProps {
  id: number;
  type: 'article' | 'episode';
  attributes: {
    createdAt: string;
    updatedAt: string;
    Slug: string;
    Title: string;
    isFeatured: boolean;
    Description: string;
    Category: string;
    Thumbnail: {
      data: ImageData;
    };
  };
}

export default function Featured() {
  const baseUrl = "http://localhost:1337";
  const [featuredProps, setFeatured] = useState<FeaturedProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const [articlesRes, episodesRes] = await Promise.all([
          fetch(`${baseUrl}/api/articles?filters[isFeatured][$eq]=true&pagination[limit]=2&sort=publishedAt:desc&populate=*`),
          fetch(`${baseUrl}/api/episodes?filters[isFeatured][$eq]=true&pagination[limit]=2&sort=publishedAt:desc&populate=*`)
        ]);

        if (!articlesRes.ok) {
          throw new Error('Failed to fetch articles');
        }
        if (!episodesRes.ok) {
          throw new Error('Failed to fetch episodes');
        }

        const articlesData = await articlesRes.json();
        const episodesData = await episodesRes.json();

        // Add 'type' to distinguish between articles and episodes
        const articles = articlesData.data.map((item: any) => ({ ...item, type: 'article' }));
        const episodes = episodesData.data.map((item: any) => ({ ...item, type: 'episode' }));

        // Combine and sort by createdAt date in descending order
        const combinedData: FeaturedProps[] = [...articles, ...episodes].sort((a, b) => {
          return new Date(b.attributes.createdAt).getTime() - new Date(a.attributes.createdAt).getTime();
        });

        // Limit to the most recent 2 items
        const postData: FeaturedProps[] = combinedData.slice(0, 2);

        setFeatured(postData);
      } catch (error) {
        console.error('Error fetching featured content:', error);
        setError('Failed to fetch featured content');
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <div className="flex space-x-6 m-9">
      {!loading && featuredProps.length > 0 ? (
        featuredProps.map((post, idx) => {
          const thumbnail = post.attributes.Thumbnail.data.attributes.url;
          const link = post.type === 'article' ? `/articles/${post.attributes.Slug}` : `/episodes/${post.attributes.Slug}`;
          return (
            <div
              key={idx}
              className="flex flex-col items-start justify-between p-12 bg-[#f7d1cd] rounded-lg w-1/2 bg-cover bg-center"
              style={{ backgroundImage: `url(${baseUrl}${thumbnail})` }}
            >
              <div className="mt-[150px]">
                <h1 className="text-4xl font-bold leading-tight text-white">
                  {post.attributes.Title}
                </h1>
                <Link href={link} passHref>
                  <Button variant="secondary" className="mt-2">Read More</Button>
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <div>{loading ? "Loading..." : error}</div>
      )}
    </div>
  );
}
