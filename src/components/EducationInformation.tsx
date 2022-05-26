import React from "react";

import { ParserMessageResponse } from "types";
import { Box, Typography } from "ui";
import SchoolInfo from "./SchoolInfo";

type EducationInformationProps = {
  education: ParserMessageResponse["education"];
};

const EducationInformation = ({ education }: EducationInformationProps): JSX.Element => {
  return (
    <Box>
      <Typography fontWeight={600}>Experience:</Typography>
      {education.map((school) => (
        <SchoolInfo school={school} />
      ))}
    </Box>
  );
};

export default EducationInformation;
