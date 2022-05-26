import React, { useState } from "react";

import BasicInformation from "components/BasicInformation";
import { DOMMessage, ParserMessageResponse } from "types";
import { Typography, Box } from "ui";
import ScrapeButton from "components/ScrapeButton";
import ExperiencesInformation from "components/ExperiencesInformation";
import EducationInformation from "components/EducationInformation";

const App = (): JSX.Element => {
  const [name, setName] = useState<ParserMessageResponse["name"]>("");
  const [location, setLocation] = useState<ParserMessageResponse["location"]>("");
  const [experiences, setExperiences] = useState<ParserMessageResponse["experiences"]>();

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
              setName(response.name);
              setLocation(response.location);
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
      <Box margin={5}>
        <BasicInformation label="Name">{name}</BasicInformation>
        <BasicInformation label="Location">{location}</BasicInformation>
        <ExperiencesInformation />
        <EducationInformation />
      </Box>
    </>
  );
};

export default App;
