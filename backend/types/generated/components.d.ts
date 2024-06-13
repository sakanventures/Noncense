import type { Schema, Attribute } from '@strapi/strapi';

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
      'links.platform': LinksPlatform;
    }
  }
}
