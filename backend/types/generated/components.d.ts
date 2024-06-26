import type { Schema, Attribute } from '@strapi/strapi';

export interface LinksNavBar extends Schema.Component {
  collectionName: 'components_links_nav_bars';
  info: {
    displayName: 'NavBar';
    description: '';
  };
  attributes: {
    Link: Attribute.String;
    Url: Attribute.String;
    Order: Attribute.Integer;
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

export interface LinksSocial extends Schema.Component {
  collectionName: 'components_links_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    XUrl: Attribute.String;
    AppleUrl: Attribute.String;
    SpotifyUrl: Attribute.String;
    YoutubeUrl: Attribute.String;
    DiscordUrl: Attribute.String;
  };
}

export interface PostSingle extends Schema.Component {
  collectionName: 'components_post_singles';
  info: {
    displayName: 'Single';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Slug: Attribute.String;
    Featured: Attribute.Media<'images', true>;
    RichTextBlock: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'links.nav-bar': LinksNavBar;
      'links.platform': LinksPlatform;
      'links.social': LinksSocial;
      'post.single': PostSingle;
    }
  }
}
