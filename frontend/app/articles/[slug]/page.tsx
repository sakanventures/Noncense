"use client";

import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";

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

interface ArticleProps {
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
  };
}

interface ArticleAPIProps {
  data: ArticleProps[];
}

export default function ArticleData() {
  const baseUrl = "http://localhost:1337";
  const { slug } = useParams();
  const [articleProps, setArticleProps] = useState<ArticleProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(
          `${baseUrl}/api/articles?filters[Slug][$eq]=${slug}&populate=*`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch blog post');
        }
        const result: ArticleAPIProps = await res.json();
        if (result.data.length > 0) {
          setArticleProps(result.data[0]); // Assuming there's only one blog post with the provided slug
        } else {
          setError('Blog post not found');
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError('Failed to fetch blog post');
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!articleProps) {
    return <div>Loading...</div>;
  }

  const featuredImage = articleProps.attributes.Featured.data?.[0]?.attributes;
  const content: BlocksContent = articleProps.attributes.RichTextBlock as unknown as BlocksContent;

  return (
    <div className="flex flex-col">
      <section className="relative h-[30vh] w-full overflow-hidden">
        {featuredImage && (
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            width={1200}
            height={1200}
            src={`http://localhost:1337${featuredImage.url}`}
            alt={featuredImage.alternativeText || 'Featured Image'}
          />
        )}
        <div className="absolute inset-0 bg-gray-900/50" />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{articleProps.attributes.Title}</h1>
          <p className="mt-3 max-w-3xl text-lg">{articleProps.attributes.Description}</p>

          <div className="space-y-2">
            <p className="text-white">Jane Doe | June 10, 2024</p>
          </div>
        </div>
      </section>

      <article className="mx-auto my-12 max-w-3xl space-y-8 px-4 text-center">
        <div className="prose prose-lg prose-gray dark:prose-invert">
          <p>
            <BlocksRenderer content={content}/>
          </p>
        </div>
      </article>
    </div>
  );
}
