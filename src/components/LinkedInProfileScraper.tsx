import React, { useCallback, useState } from "react";

import { DOMMessage, ParserMessageResponse } from "types";
import { Typography, Box, Card, CardContent, TextRow } from "ui";
import ScrapeButton from "components/ScrapeButton";
import ExperiencesInformation from "components/ExperiencesInformation";
import EducationInformation from "components/EducationInformation";

const LinkedInProfileScraper = (): JSX.Element => {
  const [name, setName] = useState<ParserMessageResponse["name"]>("");
  const [location, setLocation] = useState<ParserMessageResponse["location"]>("");
  const [experiences, setExperiences] = useState<ParserMessageResponse["experiences"]>([]);
  const [education, setEducation] = useState<ParserMessageResponse["education"]>([]);

  const handleScrapeProfile = useCallback((): void => {
    if (!chrome.tabs) return;
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true
      },
      (tabs) => {
        chrome.tabs.sendMessage(
          tabs[0].id || 0,
          { type: "GET_DOM" } as DOMMessage,
          (response: ParserMessageResponse) => {
            setName(response.name);
            setLocation(response.location);
            setExperiences(response.experiences);
            setEducation(response.education);
          }
        );
      }
    );
  }, [setName, setLocation, setExperiences, setEducation]);

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
