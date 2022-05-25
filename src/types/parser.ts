export type DOMMessage = {
  type: "GET_DOM";
};

export type ParserMessageResponse = {
  headlines: string;
  title: string;
};
