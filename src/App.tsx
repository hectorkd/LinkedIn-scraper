import React, { useState } from "react";

import BasicInformation from "components/BasicInformation";
import { DOMMessage, ParserMessageResponse } from "types";
import { Typography, Box } from "ui";
import ScrapeButton from "components/ScrapeButton";
import educationInitialState from "./constants";

const App = (): JSX.Element => {
  const [name, setName] = useState<ParserMessageResponse["name"]>("");
  const [location, setLocation] = useState<ParserMessageResponse["location"]>("");
  const [experienc, setExperience] = useState<ParserMessageResponse["experiences"]>([]);
  const [education, setEducation] =
    useState<ParserMessageResponse["education"]>(educationInitialState);

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
      <BasicInformation label="Name">{name}</BasicInformation>
    </>
  );
};

export default App;
