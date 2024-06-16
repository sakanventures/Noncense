import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutAdBanner extends Schema.Component {
  collectionName: 'components_layout_ad_banners';
  info: {
    displayName: 'AdBanner';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Image: Attribute.Media<'images', true>;
    Url: Attribute.String;
  };
}

export interface LinksPlatform extends Schema.Component {
  collectionName: 'components_links_platforms';
  info: {
    displayName: 'Platform';
    icon: 'headphone';
  };
  attributes: {
    AppleUrl: Attribute.String;
    SpotifyUrl: Attribute.String;
    RssUrl: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.ad-banner': LayoutAdBanner;
      'links.platform': LinksPlatform;
    }
  }
}
