export type DOMMessage = {
  type: "GET_DOM";
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
