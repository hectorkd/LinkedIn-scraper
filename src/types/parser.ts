import { DomMessage } from "../constants";

export type DomMessageType = {
  type: DomMessage;
};

export type ParserMessageResponse = {
  name: string;
  location: string;
  experiences: ProfileExperience[];
  education: ProfileEducation[];
};

export type ProfileExperience = {
  company: string;
  tenure: string;
  jobs: {
    title: string;
    description: string;
  }[];
};

export type ProfileEducation = {
  name: string;
  course: string;
  time: string;
};

export type LinkedInScraperHook = {
  response: ParserMessageResponse;
  handleScrapeProfile: () => void;
};
