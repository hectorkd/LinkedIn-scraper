import * as cheerio from "cheerio";

import { ParserMessageResponse, ProfileExperience } from "types";

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

  getExperience(): ParserMessageResponse["experiences"] {
    const experiencesDom = this.getLiList("experience");

    const companies = experiencesDom.map((_index, element): ProfileExperience => {
      if (this.checkClassExists(element)) {
        return this.getPromotionExperience(element);
      }
      return this.getRegularExperience(element);
    });

    return companies.get();
  }

  private getPromotionDetailsElement(experience: cheerio.Element): cheerio.Cheerio {
    return this.$(experience)
      .children(".pvs-entity")
      .children(".display-flex")
      .children(".display-flex")
      .children("a");
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

  private getPromotionUl(element: cheerio.Element): cheerio.Cheerio {
    return this.$(element)
      .children(".pvs-entity")
      .children(".display-flex")
      .children(".pvs-list__outer-container")
      .children("ul")
      .children();
  }

  private getPromotionTitle(element: cheerio.Element): string {
    return this.$(element)
      .children(".pvs-entity")
      .children()
      .eq(1)
      .children(".display-flex")
      .children("a")
      .children("div")
      .children(".hoverable-link-text")
      .children()
      .eq(1)
      .text();
  }

  private checkIfDescriptionExists(element: cheerio.Element): boolean {
    return this.$(element)
      .children(".pvs-entity")
      .children()
      .eq(1)
      .children()
      .eq(1)
      .hasClass("pvs-list__outer-container");
  }

  private getPromotionDescription(element: cheerio.Element): string {
    if (!this.checkIfDescriptionExists(element)) return "";
    return this.$(element)
      .find(".inline-show-more-text")
      .first()
      .children(".visually-hidden")
      .text();
  }

  private getPromotionExperience(element: cheerio.Element): ProfileExperience {
    const company = this.getPromotionDetailsElement(element)
      .children(".display-flex")
      .children("span")
      .children(".visually-hidden")
      .text();
    const tenure = this.getPromotionDetailsElement(element)
      .children()
      .eq(1)
      .children(".visually-hidden")
      .text()
      .split(" · ")[1];

    const jobs = this.getPromotionUl(element)
      .map((_index, PromotionLi): { title: string; description: string } => {
        const title = this.getPromotionTitle(PromotionLi);
        const description = this.getPromotionDescription(PromotionLi);
        return { title, description };
      })
      .get();

    return { company, tenure, jobs };
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
}

export default LinkedInParser;
