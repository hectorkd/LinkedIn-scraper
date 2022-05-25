import { DOMMessage, ParserMessageResponse } from "../types";

// Function called when a new message is received
const messagesFromReactAppListener = (
  msg: DOMMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: ParserMessageResponse) => void
): void => {
  console.log("[content.js]. Message received", msg);

  //   const headlines = Array.from(document.getElementsByTagName<"h1">("h1"))
  //   .map((h1) => h1.innerText);

  // Prepare the response object with information about the site
  const response: ParserMessageResponse = {
    title: document.title,
    headlines: "test"
  };

  sendResponse(response);
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
