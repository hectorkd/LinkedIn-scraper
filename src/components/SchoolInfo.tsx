import React from "react";

import { ProfileEducation } from "types";
import { Card, CardContent } from "ui";
import TextRow from "./common/TextRow";

type SchoolInfoProps = {
  school: ProfileEducation;
};

const SchoolInfo: React.FC<SchoolInfoProps> = ({ school }: SchoolInfoProps): JSX.Element => {
  return (
    <Card sx={{ margin: 2 }} variant="outlined">
      <CardContent>
        <TextRow label="School:">{school.name}</TextRow>
        <TextRow label="Course:">{school.course}</TextRow>
        <TextRow label="Date:">{school.time}</TextRow>
      </CardContent>
    </Card>
  );
};

export default SchoolInfo;
