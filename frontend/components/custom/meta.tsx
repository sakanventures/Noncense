"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface ImageData {
  data: {
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
  };
}

interface RichTextBlock {
  type: string;
  children: {
    type: string;
    text: string;
  }[];
}

interface Article {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    isFeatured: boolean;
    Thumbnail: ImageData;
    Slug: string;
    RichTextBlock: RichTextBlock[];
  };
}

interface Episode {
  id: number;
  attributes: {
    Title: string;
    Description: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    isFeatured: boolean;
    Thumbnail: ImageData;
    Slug: string;
    RichTextBlock: RichTextBlock[];
    Episode: string;
    VideoID: string;
  };
}

interface Tag {
  id: number;
  attributes: {
    Title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Articles: {
      data: Article[];
    };
    Episodes: {
      data: Episode[];
    };
  };
}

interface TagsResponse {
  data: Tag[];
}

const Meta: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/tags?populate=*');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: TagsResponse = await response.json();
        setTags(data.data);
      } catch (error) {
        console.error('Error fetching tags:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toDateString();
  };

  const mergeAndSortContent = (articles: Article[], episodes: Episode[]) => {
    const allContent = [
      ...articles.map((article) => ({
        id: article.id,
        type: 'article',
        title: article.attributes.Title,
        createdAt: article.attributes.createdAt,
        richTextBlockLength: article.attributes.RichTextBlock.length,
      })),
      ...episodes.map((episode) => ({
        id: episode.id,
        type: 'episode',
        title: episode.attributes.Title,
        createdAt: episode.attributes.createdAt,
        episodeNumber: episode.attributes.Episode,
      })),
    ];

    return allContent
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 4); // Limit to 4 items
  };

  const truncateTitle = (title: string, maxLength: number) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="grid grid-cols-1 gap-28 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-28">
        {tags.map((tag) => (
          <section key={tag.id}>
            <h2 className="mb-4 text-2xl font-bold">{tag.attributes.Title.toUpperCase()}</h2>
            <div className="space-y-4">
              {mergeAndSortContent(tag.attributes.Articles.data, tag.attributes.Episodes.data).map((content) => (
                <div key={content.id} className="group flex items-start">
                  <img
                    src="/placeholder.svg"
                    alt="Content thumbnail"
                    className="w-20 h-20 rounded-md"
                  />
                  <div className="ml-4">
                    <Link href="">
                      <h3 className="text-lg font-semibold group-hover:underline">
                        {truncateTitle(content.title, 25)}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {formatDate(content.createdAt)}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Meta;