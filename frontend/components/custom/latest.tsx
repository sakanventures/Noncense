import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ImageData {
  attributes: {
    url: string;
  };
}

interface ArticleProps {
  id: number;
  type: 'article';
  attributes: {
    createdAt: string;
    updatedAt: string;
    Slug: string;
    Title: string;
    isFeatured: boolean;
    Description: string;
    Category: string;
    Tags: string;
    Tabs: string;
    Thumbnail: {
      data: ImageData;
    };
  };
}

const baseUrl = "http://localhost:1337";

export default function Latest() {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/articles?sort=publishedAt:desc&populate=*`);
        if (!res.ok) {
          throw new Error('Failed to fetch articles');
        }
        const jsonData = await res.json();
        const postData: ArticleProps[] = jsonData.data;
        // Get the 4th to 7th latest articles
        const startIdx = 3; // Index to start from (4th latest)
        const endIdx = startIdx + 4; // End at 4th latest + 4
        const slicedData = postData.slice(startIdx, endIdx);
        setArticles(slicedData);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError('Failed to fetch articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-[500px] ml-8">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      <div className="space-y-4">
        {articles.length > 0 ? (
          articles.map((post) => (
            <div key={post.id}>
                <Link href={`/articles/${post.attributes.Slug}`}>
              <h3 className="font-semibold">{post.attributes.Title}</h3>
              <p className="text-sm text-muted-foreground">
                {new Date(post.attributes.createdAt).toLocaleDateString()}
              </p>
              {/* <p>{post.attributes.Description}</p> */}
              </Link>
            </div>
          ))
        ) : (
          <p>No articles found</p>
        )}
      </div>
    </div>
  );
}
