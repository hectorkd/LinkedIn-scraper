import React from "react";

import { ProfileEducation } from "types";
import { Card, CardContent, Typography } from "ui";

type SchoolInfoProps = {
  school: ProfileEducation;
};

const SchoolInfo: React.FC<SchoolInfoProps> = ({ school }: SchoolInfoProps): JSX.Element => {
  return (
    <Card sx={{ margin: 2 }} variant="outlined">
      <CardContent>
        <Typography component="h1" fontWeight={600}>
          {school.name}
        </Typography>
        <Typography>{school.course}</Typography>
        <Typography>{school.time}</Typography>
      </CardContent>
    </Card>
  );
};

export default SchoolInfo;
