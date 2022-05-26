import React from "react";

import { ParserMessageResponse } from "types";
import { Box, Typography } from "ui";
import CompanyInfo from "./CompanyInfo";

type ExperiencesInformationProps = {
  experiences: ParserMessageResponse["experiences"];
};

const ExperiencesInformation = ({ experiences }: ExperiencesInformationProps): JSX.Element => {
  return (
    <Box>
      <Typography fontWeight={600}>Experience:</Typography>
      {experiences.map((experience) => (
        <CompanyInfo company={experience} />
      ))}
    </Box>
  );
};

export default ExperiencesInformation;
