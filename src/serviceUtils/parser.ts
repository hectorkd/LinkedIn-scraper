import { DOMMessage, ParserMessageResponse } from "../types";
import LinkedInParser from "./scraper";

const extensionListener = (
  _msg: DOMMessage,
  _sender: chrome.runtime.MessageSender,
  sendResponse: (response: ParserMessageResponse) => void
): void => {
  //   if (!document.body.textContent) {
  //     sendResponse({
  //       name: "Not found",
  //       experiences: {
  //         company: "Not found",
  //         tenure: "Not found",
  //         jobs: [{ title: "not found", description: "Not found" }]
  //       },
  //       location: "Not found",
  //       education: [
  //         {
  //           name: "Not found",
  //           course: "Not found",
  //           tenure: "Not found"
  //         }
  //       ]
  //     });
  //     return;
  //   }

  const linkedInParser = new LinkedInParser(document.body.innerHTML);

  console.log("linkedInParser.getName()", linkedInParser.getName());

  const response: ParserMessageResponse = {
    name: linkedInParser.getName()
  };

  sendResponse(response);
};

chrome.runtime.onMessage.addListener(extensionListener);
