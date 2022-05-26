import * as cheerio from "cheerio";

import { ParserMessageResponse, ProfileExperience } from "types";

class LinkedInParser {
  private $: cheerio.Root;

  constructor(innerHtml: string) {
    this.$ = cheerio.load(innerHtml);
  }

  private getLiList(value: string): cheerio.Cheerio {
    const sectionUl = this.$(`#${value}`)
      .siblings(".pvs-list__outer-container")
      .children("ul")
      .children();

    return sectionUl;
  }

  private checkClassExists(element: cheerio.Element): boolean {
    return this.$("div.pvs-entity", element)
      .find("ul.pvs-list")
      .first()
      .children()
      .eq(0)
      .children("span")
      .hasClass("pvs-entity__path-node");
  }

  private getRegularExperience(element: cheerio.Element): ProfileExperience {
    const company = this.$(element)
      .children(".pvs-entity")
      .children(".display-flex")
      .children(".display-flex")
      .children(".display-flex")
      .children("span")
      .first()
      .children(".visually-hidden")
      .text()
      .split(" · ")[0];
    const title = this.$(element)
      .children(".pvs-entity")
      .children(".display-flex")
      .children(".display-flex")
      .children(".display-flex")
      .children(".display-flex")
      .children(".mr1")
      .children(".visually-hidden")
      .text();
    const tenure = this.$(element)
      .children(".pvs-entity")
      .children(".display-flex")
      .children(".display-flex")
      .children(".display-flex")
      .children("span")
      .eq(1)
      .children(".visually-hidden")
      .text()
      .split(" · ")[1];
    const description = this.$(element)
      .find("div.inline-show-more-text")
      .first()
      .children("span.visually-hidden")
      .text();
    return { company, tenure, jobs: [{ title, description }] };
  }

  getName(): ParserMessageResponse["name"] {
    const name = this.$(".pv-top-card .text-heading-xlarge").text();

    return name;
  }

  getLocation(): ParserMessageResponse["location"] {
    const location = this.$("div.pb2").children(".text-body-small").text();

    return location;
  }

  getExperience(): ParserMessageResponse["experiences"] {
    const experiencesDom = this.getLiList("experience");

    const companies = experiencesDom.map((_index, element): ProfileExperience => {
      if (this.checkClassExists(element)) {
        return {
          company: "Not found",
          tenure: "Not found",
          jobs: [{ title: "Not found", description: "Not found" }]
        };
      }
      return this.getRegularExperience(element);
    });

    return companies.get();
  }
}

export default LinkedInParser;
