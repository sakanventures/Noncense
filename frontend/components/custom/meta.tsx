"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    Slug: string;
    RichTextBlock: RichTextBlock[];
    Thumbnail?: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    Categories?: {
      data: {
        id: number;
        attributes: {
          Title: string;
        };
      }[];
    };
    Tags?: {
      data: {
        id: number;
        attributes: {
          Title: string;
        };
      }[];
    };
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
    Slug: string;
    RichTextBlock: RichTextBlock[];
    Episode: string;
    VideoID: string;
    Thumbnail?: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
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

interface MergedContent {
  id: number;
  type: 'article' | 'episode';
  title: string;
  createdAt: string;
  richTextBlockLength?: number;
  episodeNumber?: string;
  thumbnail?: string;
}

const Meta: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await axios.get<TagsResponse>(
          'http://localhost:1337/api/tags?populate[Articles][populate][0]=Thumbnail&populate[Articles][populate][1]=Categories&populate[Articles][populate][2]=Tags&populate[Episodes][populate][0]=RichTextBlock&populate[Episodes][populate][1]=Thumbnail'
        );
        setTags(res.data.data);
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

  const truncateTitle = (title: string, length: number) => {
    return title.length > length ? `${title.substring(0, length)}...` : title;
  };

  const mergeAndSortContent = (articles: Article[], episodes: Episode[]): MergedContent[] => {
    const allContent: MergedContent[] = [
      ...articles.map((article) => ({
        id: article.id,
        type: 'article' as const,
        title: article.attributes.Title,
        createdAt: article.attributes.createdAt,
        richTextBlockLength: article.attributes.RichTextBlock.length,
        thumbnail: article.attributes.Thumbnail?.data.attributes.url,
      })),
      ...episodes.map((episode) => ({
        id: episode.id,
        type: 'episode' as const,
        title: episode.attributes.Title,
        createdAt: episode.attributes.createdAt,
        episodeNumber: episode.attributes.Episode,
        thumbnail: episode.attributes.Thumbnail?.data.attributes.url,
      })),
    ];

    return allContent.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 4);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="grid grid-cols-1 gap-28 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-28">
        {tags.map((tag) => (
          <section key={tag.id}>
            <h2 className="mb-4 text-2xl font-bold">{tag.attributes.Title.toUpperCase()}</h2>
            <div className="space-y-4">
              {mergeAndSortContent(tag.attributes.Articles.data, tag.attributes.Episodes.data).map((content, idx) => (
                <div key={idx} className="group flex items-start">
                  <img
                    src={`http://localhost:1337${content.thumbnail}` || "/placeholder.svg"}
                    alt="Content thumbnail"
                    className="w-20 h-20 rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold group-hover:underline">
                      {truncateTitle(content.title, 25)}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {formatDate(content.createdAt)} 
                      {/* • {content.type === 'article' ? `${Math.ceil(content.richTextBlockLength! / 100)} min read` : `Episode ${content.episodeNumber}`} */}
                    </p>
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