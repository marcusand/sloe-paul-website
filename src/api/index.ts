import {
  AboutData,
  Concert,
  GeneralData,
  ImprintData,
  LiveData,
  News,
  Release,
  Video,
} from "./interfaces";

export const getAssetUrl = (
  assetId: string,
  transformationPreset = "standard",
): string => {
  return `${process.env.NEXT_PUBLIC_CMS_HOST}/assets/${assetId}?key=${transformationPreset}`;
};

export const getYoutubeEmbedUrl = (videoId: string): string => {
  return `https://www.youtube.com/embed/${videoId}`;
};

const fetchJson = async <T>(uri: string, filterStatus = false): Promise<T> => {
  const statusFilter = filterStatus ? { status: { _eq: "published" } } : {};
  const url = `${
    process.env.NEXT_PUBLIC_CMS_HOST
  }${uri}?fields=*.*&filter=${JSON.stringify(statusFilter)}`;

  console.log("[Fetch] ", url);

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.CMS_API_TOKEN}` },
  });

  if (response.status !== 200) {
    throw new Error(
      `Request failed with status code ${response.status}: ${response.statusText}`,
    );
  }

  return await response.json();
};

const fetchItems = async <T>(collection: string, filterStatus = false): Promise<T> => {
  const json = await fetchJson<{ data: T }>(`/items/${collection}`, filterStatus);

  return json.data;
};

export const getData = async () => {
  const [general, about, news, releases, videos, live, concerts, imprint] =
    await Promise.all([
      fetchItems<GeneralData>("sloe_paul"),
      fetchItems<AboutData>("about"),
      fetchItems<[News]>("news", true),
      fetchItems<[Release]>("releases", true),
      fetchItems<[Video]>("videos", true),
      fetchItems<LiveData>("live"),
      fetchItems<[Concert]>("concerts", true),
      fetchItems<ImprintData>("imprint"),
    ]);

  return {
    general,
    about,
    news,
    releases,
    videos,
    live,
    concerts,
    imprint,
  };
};

export type Data = Awaited<ReturnType<typeof getData>>;
