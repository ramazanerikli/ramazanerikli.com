export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  tags: array;
  slug: {
    current: string
  };
  mainImage: {
    asset: {
      url: string
    }
  };
  body: [object]
}

export interface Work {
  _id: string;
  title: string;
  tags: array;
  description: string;
  color: string;
  link: string
}