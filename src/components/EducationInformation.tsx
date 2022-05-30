import React from "react";

import { ParserMessageResponse } from "types";
import { InformationWrapper } from "ui";
import SchoolInfo from "../ui/SchoolInfo";

type EducationInformationProps = {
  education: ParserMessageResponse["education"];
};

const EducationInformation = ({ education }: EducationInformationProps): JSX.Element => {
  return (
    <InformationWrapper label="Education:">
      {education.map((school) => (
        <SchoolInfo school={school} />
      ))}
    </InformationWrapper>
  );
};

export default EducationInformation;
