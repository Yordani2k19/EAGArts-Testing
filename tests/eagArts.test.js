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

test("User adds to cart", async t => {
  await t.click(navbar.elephantCollectionLink);

  await t.expect(elephantColl.elephantFamilyLink.exists).ok();
  await t.click(elephantColl.elephantFamilyLink);
  await t.expect(elephantColl.elephantFamilyLink.exists).notOk();

  await t.expect(elephantColl.addToCartButton.exists).ok();
  await t
    .expect(elephantColl.elephantFamilyPrice.innerText)
    .contains("9,500.00");

  await t.click(elephantColl.addToCartButton);
});
