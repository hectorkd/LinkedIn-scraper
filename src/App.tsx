import React, { useState } from "react";

import BasicInformation from "components/BasicInformation";
import { DOMMessage, ParserMessageResponse } from "types";
import { Typography, Box, Card, CardContent } from "ui";
import ScrapeButton from "components/ScrapeButton";
import ExperiencesInformation from "components/ExperiencesInformation";
import EducationInformation from "components/EducationInformation";

const App = (): JSX.Element => {
  const [name, setName] = useState<ParserMessageResponse["name"]>("");
  const [location, setLocation] = useState<ParserMessageResponse["location"]>("");
  const [experiences, setExperiences] = useState<ParserMessageResponse["experiences"]>([]);
  const [education, setEducation] = useState<ParserMessageResponse["education"]>([]);

  // should make a hook?
  const scrapeProfile = (): void => {
    chrome.tabs &&
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
              console.log("response.experiences", response.experiences);

              setName(response.name);
              setLocation(response.location);
              setExperiences(response.experiences);
            }
          );
        }
      );
  };

  return (
    <>
      <Box margin={3}>
        <Typography variant="h6" component="h1">
          LinkedIn profile scraper
        </Typography>
      </Box>
      <ScrapeButton onClick={scrapeProfile}>Grab info</ScrapeButton>
      <Card sx={{ margin: 2 }}>
        <CardContent>
          <BasicInformation label="Name">{name}</BasicInformation>
          <BasicInformation label="Location">{location}</BasicInformation>
          <ExperiencesInformation experiences={experiences} />
          <EducationInformation />
        </CardContent>
      </Card>
    </>
  );
};

export default App;
