import React from "react";

import { ProfileExperience } from "types";
import { Box, Typography, Card, CardContent } from "ui";

type CompanyInfoProps = {
  company: ProfileExperience;
};

const CompanyInfo = ({ company }: CompanyInfoProps): JSX.Element => {
  return (
    <Card sx={{ margin: 2 }} variant="outlined">
      <CardContent>
        <Typography component="h1" fontWeight={600}>
          {company.company}
        </Typography>
        <Typography>{company.tenure}</Typography>
        {company.jobs.map((job) => {
          return (
            <Box margin={2}>
              <Typography fontWeight={550}>- {job.title}</Typography>
              {job.description ? <Typography>{job.description}</Typography> : null}
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default CompanyInfo;
