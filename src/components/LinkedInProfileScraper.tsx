import React from "react";

import { Typography, Box, Card, CardContent, TextRow, ScrapeButton } from "ui";
import ExperiencesInformation from "components/ExperiencesInformation";
import EducationInformation from "components/EducationInformation";
import useLinkedInScraper from "hooks/useLinkedInScraper";

const LinkedInProfileScraper = (): JSX.Element => {
  const { response, handleScrapeProfile } = useLinkedInScraper();
  const { name, location, experiences, education } = response;

  return (
    <>
      <Box margin={3}>
        <Typography variant="h6" component="h1" fontWeight={700}>
          LinkedIn profile scraper
        </Typography>
      </Box>
      <ScrapeButton onClick={handleScrapeProfile}>Grab info</ScrapeButton>
      <Card sx={{ marginY: 2 }}>
        <CardContent>
          <TextRow label="Name:">{name}</TextRow>
          <TextRow label="Location:">{location}</TextRow>
          <ExperiencesInformation experiences={experiences} />
          <EducationInformation education={education} />
        </CardContent>
      </Card>
    </>
  );
};

export default LinkedInProfileScraper;
