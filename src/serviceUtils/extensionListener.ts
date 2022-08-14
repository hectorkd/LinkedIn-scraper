import { DomMessageType, ParserMessageResponse } from "../types";
import LinkedInParser from "./scraper";

const extensionListener = (
  _msg: DomMessageType,
  _sender: chrome.runtime.MessageSender,
  sendResponse: (response: ParserMessageResponse) => void
): void => {
  const linkedInParser = new LinkedInParser(document.body.innerHTML);

  /*
    const profileData = await getProfileData()
    const experienceData = await getExpData()
    const eduData = await getEduData()

    sendResponse(....)

    getProfileData()
      Navigate to the page. (chrome.tabs(url))
      Wait for the page to load.
      Scrape the page
      Return the data.
  */

  const response: ParserMessageResponse = {
    name: linkedInParser.getName(),
    location: linkedInParser.getLocation(),
    experiences: linkedInParser.getExperience(),
    education: linkedInParser.getEducation()
  };

  sendResponse(response);
};

chrome.runtime.onMessage.addListener(extensionListener);
