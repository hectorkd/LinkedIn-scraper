import * as cheerio from "cheerio";

class LinkedInParser {
  private $: cheerio.Root;

  constructor(innerHtml: string) {
    this.$ = cheerio.load(innerHtml);
  }
}

export default LinkedInParser;
