import React from "react";

import { ParserMessageResponse } from "types";
import { InformationWrapper } from "ui";
import CompanyInfo from "../ui/CompanyInfo";

type ExperiencesInformationProps = {
  experiences: ParserMessageResponse["experiences"];
};

const ExperiencesInformation = ({ experiences }: ExperiencesInformationProps): JSX.Element => {
  return (
    <InformationWrapper label="Experience:">
      {experiences.map((experience) => (
        <CompanyInfo company={experience} />
      ))}
    </InformationWrapper>
  );
};

export default ExperiencesInformation;
