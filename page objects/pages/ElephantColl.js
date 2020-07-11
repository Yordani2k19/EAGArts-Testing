import { Selector } from "testcafe";

class ElephantColl {
  constructor() {
    this.elephantFamilyLink = Selector("h2").withText("Elephant Family");
    this.addToCartButton = Selector(".alt");
    this.elephantFamilyPrice = Selector("span").withText("9,500.00");
  }
}

export default ElephantColl;
