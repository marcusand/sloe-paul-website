export interface File {
  id: string;
  filename_disk: string;
  title: string;
  type: string;
}
export interface ImageFile extends File {
  width: number;
  height: number;
}

export interface SocialLink {
  title: string;
  url: string;
}

export interface GeneralData {
  id: string;
  links: SocialLink[];
  shop_link: string;
}

export interface AboutData {
  id: string;
  about_text_de: string;
  about_text_en: string;
}

export interface Concert {
  id: string;
  date: string;
  location: string;
  city: string;
  description: string;
  link: string;
}

export interface News {
  id: string;
  title: string;
  image: ImageFile;
  text: string;
}

export interface Release {
  id: string;
  title: string;
  cover: ImageFile;
  description: string;
}

export interface Video {
  id: string;
  title: string;
  video: string;
}

export interface LiveData {
  id: string;
  video: File;
  description_de: string;
  description_en: string;
  concerts_per_page: number;
}

export interface ImprintData {
  id: string;
  text_left: string;
  text_right: string;
}
