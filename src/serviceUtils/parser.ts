import { DOMMessage, ParserMessageResponse } from "../types";

const extensionListener = (
  _msg: DOMMessage,
  _sender: chrome.runtime.MessageSender,
  sendResponse: (response: ParserMessageResponse) => void
): void => {
  const response: ParserMessageResponse = {
    name: "test"
  };

  sendResponse(response);
};

chrome.runtime.onMessage.addListener(extensionListener);
