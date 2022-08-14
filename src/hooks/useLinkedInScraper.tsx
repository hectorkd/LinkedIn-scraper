import React, { useCallback, useState } from "react";

import { LinkedInScraperHook, ParserMessageResponse } from "types";
import { DomMessage } from "../constants";

const useLinkedInScraper = (): LinkedInScraperHook => {
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
          { type: DomMessage.SCRAPE_PROFILE },
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

  return { response: { name, location, experiences, education }, handleScrapeProfile };
};

export default useLinkedInScraper;
