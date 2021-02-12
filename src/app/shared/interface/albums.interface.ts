export interface AlbumsInterface {
  albums: {
    album: AlbumInterface[]
    '@attr': {
      tag: string
      page: number
      perPage: number
      totalPages: number
      total: number
    }
  };
}

export interface AlbumInterface {
  name: string;
  mbid: string;
  url: string;
  artist: {
    name: string
    mbid: string
    url: string
  };
  image: [
    {
      '#text': string
      size: string
    }
  ];
  '@attr': {
    rank: number
  };
  like: boolean;
}
