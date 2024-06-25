"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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

interface ContentProps {
  id: number;
  Title: string;
  Description: string;
  Slug: string;
  Featured: {
    data: ImageData[];
  };
  RichTextBlock: RichTextBlock[];
}

interface PostProps {
  id: number;
  Content: ContentProps;
}

interface ApiResponse {
  data: PostProps[];
}

export default function Post() {
  const baseUrl = "http://localhost:1337";
  const { slug } = useParams();
  const [postProps, setPostProps] = useState<PostProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchPost = async () => {
    try {
      const res = await fetch(
        `${baseUrl}/api/articles?filters[Slug][$eq]=${slug}&populate=*`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch blog post");
      }
      const result: ApiResponse = await res.json();
      console.log("API Response:", result); // Log the full response
      if (result.data.length > 0) {
        setPostProps(result.data[0]); // Assuming there's only one blog post with the provided slug
      } else {
        setError("Post not found");
      }
    } catch (error) {
      console.error("Error fetching post:", error);
      setError("Failed to fetch post");
    }
  };

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!postProps) {
    return <div>Loading...</div>;
  }

  const featuredImage = postProps.Content.Featured.data?.[0]?.attributes;
  const content: BlocksContent = postProps.Content.RichTextBlock as unknown as BlocksContent;

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                {postProps.Content.Title}
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {postProps.Content.Description}
              </p>
              {featuredImage && (
                <Image
                  src={featuredImage.url}
                  alt={featuredImage.alternativeText || "Featured Image"}
                  width={featuredImage.width}
                  height={featuredImage.height}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <BlocksRenderer content={content} />
        </div>
      </section>
    </div>
  );
}