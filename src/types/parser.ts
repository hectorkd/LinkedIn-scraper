export type DOMMessage = {
  type: "GET_DOM";
};

export type ParserMessageResponse = {
  name: string;
  location?: string;
  experiences?: ProfileExperience[];
  education?: ProfileEducation;
};

type ProfileExperience = {
  company: string;
  tenure: string;
  jobs: {
    title: string;
    description: string;
  };
};

type ProfileEducation = {
  name: string;
  course: string;
  tenure: string;
};
