import { ImageSourcePropType } from "react-native";

export type Entry = {
  title: string;
  link: string;
  clickTrackingLink: string;
  author: string;
  publishedDateJS: string;
  picture: string;
  originalPicture: string;
  shortDescription: string;
  originalURL: string;
  mobileLink: string;
  originalMobileUrl: string;
  shareURL: string;
  mobileShareURL: string;
  ampURL: string;
  articleID: number;
  sectionID: number;
  sourceID: number;
  highlight: boolean;
  highlightType: string;
  timeSince: string;
  orderNo: number;
  publishedDate: string;
};
