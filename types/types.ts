export interface Post {
  _id: string;
  publishedAt: string;
  title: string;
  excerpt: string;
  tags: any;
  slug: {
    current: string
  };
  image: {
    asset: {
      url: string
    }
  };
  body: [object]
}

export interface Work {
  _id: string;
  title: string;
  tags: any;
  description: string;
  color: string;
  link: string
} 

export interface Tag {
  tag: any
} 