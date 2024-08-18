export interface INewsRaw {
  articles: [
    {
      source: { id: string; name: string };
      author: string;
      title: string;
      url: string;
    }
  ];
}

export interface INews {
  title: string;
  author: string;
  url: string;
}
