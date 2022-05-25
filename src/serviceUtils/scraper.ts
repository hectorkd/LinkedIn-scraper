import * as cheerio from "cheerio";

import { ParserMessageResponse } from "types";

class LinkedInParser {
  private $: cheerio.Root;

  constructor(innerHtml: string) {
    this.$ = cheerio.load(innerHtml);
  }

  getName(): ParserMessageResponse["name"] {
    const name = this.$(".pv-top-card .text-heading-xlarge").text();

    return name;
  }

  getLocation(): ParserMessageResponse["location"] {
    const location = this.$("div.pb2").children(".text-body-small").text();

    return location;
  }
}

export default LinkedInParser;
