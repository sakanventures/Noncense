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

interface ArticleProps {
  id: number;
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
  const [articleProps, setArticles] = useState<ArticleProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `${baseUrl}/api/articles?filters[isFeatured][$eq]=true&pagination[limit]=2&sort=publishedAt:desc&populate=*`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch articles');
        }
        const jsonData = await res.json();
        const postData: ArticleProps[] = jsonData.data;
        setArticles(postData);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError('Failed to fetch articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="flex space-x-6 m-9">
      {!loading && articleProps.length > 0 ? (
        articleProps.map((post, idx) => {
          const thumbnail = post.attributes.Thumbnail.data.attributes.url;
          return (
            <div
              key={idx}
              className="flex flex-col items-start justify-between p-12 bg-[#f7d1cd] rounded-lg w-1/2 bg-cover bg-center"
              style={{ backgroundImage: `url(${baseUrl}${thumbnail})`}}
            >
              <div className="mt-[150px]">
                <h1 className="text-4xl font-bold leading-tight text-white">
                  {post.attributes.Title}
                </h1>
                <Link href={`/articles/${post.attributes.Slug}`} passHref>
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
