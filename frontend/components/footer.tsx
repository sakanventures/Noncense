"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function MountainIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    );
}

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

interface NavData {
  id: number;
  Order: number;
  Link: string;
  Url: string;
}

interface FooterData {
  data: {
    attributes: {
      Title: string;
      Logo: ImageData;
      Platform: NavData[];
      Services: NavData[];
      Legal: NavData[];
    };
  };
}

export default function Footer() {
  const baseUrl = "http://localhost:1337";
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/footer?populate=*`);
        if (!res.ok) {
          throw new Error('Failed to fetch footer data');
        }
        const jsonData: FooterData = await res.json();
        if (jsonData.data && jsonData.data.attributes) {
          setFooterData(jsonData);
        } else {
          setError('No footer data found');
        }
      } catch (error) {
        console.error('Error fetching footer data:', error);
        setError('Failed to fetch footer data');
      } finally {
        setLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!footerData) {
    return <div>No data found.</div>;
  }

  const { Title, Platform = [], Services = [], Legal = [], Logo } = footerData.data.attributes;

  // Sort the Navigation items by Order
  const sortedPlatform = [...Platform].sort((a, b) => a.Order - b.Order);
  const sortedServices = [...Services].sort((a, b) => a.Order - b.Order);
  const sortedLegal = [...Legal].sort((a, b) => a.Order - b.Order);

  return (
    <footer className="bg-gray-100 py-12 dark:bg-neutral-600">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-start space-y-4">
          <Link href="#" className="flex items-center space-x-2" prefetch={false}>
            {Logo && (
              <img
                src={`${baseUrl}${Logo.data.attributes.url}`}
                alt={Logo.data.attributes.alternativeText || "Logo"}
                className="h-8 w-8"
              />
            )}
            <span className="text-lg font-bold">{Title}</span>
          </Link>
          <div className="w-full max-w-md space-y-2">
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-sm text-gray-500 dark:text-white">Sign up to get the latest updates.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h4 className="text-lg font-bold">Platform</h4>
            <nav className="flex flex-col space-y-1">
              {sortedPlatform.map((navItem) => (
                <Link key={navItem.id} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href={navItem.Url}>
                  {navItem.Link}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold">Services</h4>
            <nav className="flex flex-col space-y-1">
              {sortedServices.map((navItem) => (
                <Link key={navItem.id} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href={navItem.Url}>
                  {navItem.Link}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-bold">Legal</h4>
            <nav className="flex flex-col space-y-1">
              {sortedLegal.map((navItem) => (
                <Link key={navItem.id} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href={navItem.Url}>
                  {navItem.Link}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}