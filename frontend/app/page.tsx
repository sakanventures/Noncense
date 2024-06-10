import Image from "next/image";
import Featured from "@/components/custom/featured"
import Feed from "@/components/custom/feed"
import Ad from "@/components/custom/advertisement"
import Podcast from "@/components/custom/podcast"
import Meta from "@/components/custom/meta"

export default function Home() {
  interface ApiResponse {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      table_header: string;
      Title: string;
      Slug: string;
      RichTextBlock: any[]; // Define the type for RichTextBlock as needed
      image: {
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
              // Add other formats if needed
            };
            url: string;
          };
        };
      };
    };
  }
  return (
    <>
      <Featured/>
      <Feed/>
      <Ad/>
      <Podcast/>
      <Meta/>
    </>
  );
}
