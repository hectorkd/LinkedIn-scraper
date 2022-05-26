import React from "react";

import { ProfileExperience } from "types";
import { Box, Typography, Card, CardContent } from "ui";
import TextRow from "./common/TextRow";

type CompanyInfoProps = {
  company: ProfileExperience;
};

const CompanyInfo = ({ company }: CompanyInfoProps): JSX.Element => {
  return (
    <Card sx={{ margin: 2 }} variant="outlined">
      <CardContent>
        <TextRow label="Company:">{company.company}</TextRow>
        <TextRow label="Tenure:">{company.tenure}</TextRow>
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
