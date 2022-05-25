import { DOMMessage, ParserMessageResponse } from "../types";
import LinkedInParser from "./scraper";

const extensionListener = (
  _msg: DOMMessage,
  _sender: chrome.runtime.MessageSender,
  sendResponse: (response: ParserMessageResponse) => void
): void => {
  const linkedInParser = new LinkedInParser(document.body.innerHTML);

  const response: ParserMessageResponse = {
    title: document.title,
    headlines: "test"
  };

  sendResponse(response);
};

chrome.runtime.onMessage.addListener(extensionListener);
