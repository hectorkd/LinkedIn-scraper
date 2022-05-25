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
}

export default LinkedInParser;
