import { Selector } from "testcafe";
import Navbar from "../page objects/components/Navbar";
import ElephantColl from "../page objects/pages/ElephantColl";

const navbar = new Navbar();
const elephantColl = new ElephantColl();

// prettier-ignore
fixture `EagArts TestCafe`
    .page `https://eagarts.com/`

.beforeEach(async t => {
    await t.setPageLoadTimeout(0)
})

test("Loop test", async t => {
  await t.click(navbar.elephantCollectionLink);

  const artsForSale = await Selector("div.astra-shop-thumbnail-wrap");
  const artsCount = await artsForSale.count;

  for (let i = 0; i < artsCount; i++) {
    await t.click(artsForSale.nth(i));
    await t.click(elephantColl.addToCartButton);
    await navbar.navElement("Elephant Collection");
  }
});
