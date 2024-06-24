"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Latest from "@/components/custom/latest";

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

interface CategoryProps {
  data: {
    attributes: {
      Title: string;
    }
  }
}

interface TagsProps {
  data: {
    attributes: {
      Title: string;
    }
  }
}

interface ArticleProps {
  id: number;
  type: 'article' | 'episode';
  attributes: {
    createdAt: string;
    updatedAt: string;
    Slug: string;
    Title: string;
    isFeatured: boolean;
    Description: string;
    Category: CategoryProps[];
    Tags: TagsProps[];
    Thumbnail: {
      data: ImageData;
    };
  };
}

export default function Feed() {
  const baseUrl = "http://localhost:1337";
  const [articleProps, setArticle] = useState<ArticleProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(
          `${baseUrl}/api/articles?pagination[limit]=3&sort=publishedAt:desc&populate=*`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch articles');
        }
        const jsonData = await res.json();
        const postData: ArticleProps[] = jsonData.data;
        setArticle(postData);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError('Failed to fetch articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, []);

  return (
    <div className="flex justify-between m-8">
      {!loading && articleProps.length > 0 ? (
        articleProps.map((post, idx) => {
          const thumbnail = post.attributes.Thumbnail.data.attributes.url;

          return (
            <div key={idx} className="flex space-x-4">
              <Link href={`/articles/${post.attributes.Slug}`} passHref>
              <Card className="rounded-lg w-[300px]">
                <Image
                  src={baseUrl+thumbnail} 
                  alt={post.attributes.Title} 
                  className="w-full rounded-t-lg"
                  width={1000}
                  height={1000} />

                <CardContent>
                  <div className="flex space-x-2 py-4">
                    <Badge variant="secondary">{post.attributes.Category}</Badge>
                    <Badge variant="secondary">{post.attributes.Tags}</Badge>
                  </div>
                  <CardTitle>{post.attributes.Title}</CardTitle>
                </CardContent>
              </Card>
              </Link>
            </div>
          );
        })
      ) : (
        <div>{loading ? "Loading..." : "No articles available"}</div>
      )}
      <Latest />
    </div>
  );
}
