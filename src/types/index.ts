export interface ContentSource {
  type: 'twitter' | 'blog' | 'linkedin';
  url: string;
}

export interface GeneratedContent {
  text: string;
  timestamp: string;
  source: ContentSource;
}

export interface Profile {
  name: string;
  bio: string;
  avatar: string;
  sources: ContentSource[];
}