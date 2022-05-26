import React from "react";

import { ProfileExperience } from "types";
import { Box, Typography, Card, CardContent, Stack } from "ui";

type CompanyInfoProps = {
  company: ProfileExperience;
};

const CompanyInfo = ({ company }: CompanyInfoProps): JSX.Element => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Typography fontWeight={600}>Company:</Typography>
          <Typography>{company.company}</Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography fontWeight={600}>Tenure:</Typography>
          <Typography>{company.tenure}</Typography>
        </Stack>
        {company.jobs.map((job) => {
          return (
            <Box margin={2}>
              <Typography fontWeight={550}>{job.title}</Typography>
              <Typography>- {job.description}</Typography>
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default CompanyInfo;
