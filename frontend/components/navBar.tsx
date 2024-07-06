"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Search from "@/components/search";
import Toggle from "@/components/toggle";
import { FaBars } from "react-icons/fa6";
import { SignInButton } from "@/components/custom/SignInButton";

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

interface GlobalData {
  data: {
    attributes: {
      Title: string;
      Logo: ImageData;
      Navigation: NavData[];
    };
  };
}

interface UserData {
  firstname: string;
  lastname: string;
  email: string;
}

interface NavBarProps {
  user?: {
    data: UserData;
  };
}

export default function NavBar({ user }: NavBarProps) {
  console.log("----------->user data navbar====================>", user);
  const baseUrl = "http://localhost:1337";
  const [globalData, setGlobalData] = useState<GlobalData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGlobalData = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/global?populate=*`);
        if (!res.ok) {
          throw new Error("Failed to fetch global data");
        }
        const jsonData: GlobalData = await res.json();
        if (jsonData.data && jsonData.data.attributes) {
          setGlobalData(jsonData);
        } else {
          setError("No global data found");
        }
      } catch (error) {
        console.error("Error fetching global data:", error);
        setError("Failed to fetch global data");
      } finally {
        setLoading(false);
      }
    };

    fetchGlobalData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!globalData) {
    return <div>No data found.</div>;
  }

  const { Title, Navigation, Logo } = globalData.data.attributes;

  // Sort the Navigation items by Order
  const sortedNavigation = [...Navigation].sort((a, b) => a.Order - b.Order);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-4 md:px-6 bg-transparent backdrop-filter backdrop-blur-md">
      <Link className="flex items-center gap-2 text-lg font-semibold" href="/">
        {Logo && (
          <img
            src={`${baseUrl}${Logo.data.attributes.url}`}
            alt={Logo.data.attributes.alternativeText || "Logo"}
            className="h-8 w-8"
          />
        )}
        <span>{Title}</span>
      </Link>

      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        {sortedNavigation.map((navItem) =>
          navItem.Url.startsWith("http") ? (
            <a
              key={navItem.id}
              href={navItem.Url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {navItem.Link}
            </a>
          ) : (
            <Link key={navItem.id} href={navItem.Url}>
              {navItem.Link}
            </Link>
          )
        )}

        <Search />
      </nav>
      {user && user.data ? (
        <div className="text-red-500 font-bold ">{user.data.firstname}</div>
      ) : (
        <SignInButton />
      )}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="ghost">
            <FaBars className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent className="w-full max-w-xs" side="right">
          <div className="flex flex-col gap-6 p-3">
            {sortedNavigation.map((navItem) => (
              <Link
                key={navItem.id}
                className="font-medium hover:underline hover:underline-offset-4"
                href={navItem.Url}
              >
                {navItem.Link}
              </Link>
            ))}
            <div className="flex items-center justify-between">
              <SignInButton />
              <Toggle />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}