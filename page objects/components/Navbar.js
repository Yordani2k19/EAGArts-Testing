import { Selector, t } from "testcafe";

class Navbar {
  constructor() {
    this.navbar = Selector("#primary-menu a");
    this.homeLink = Selector("#menu-item-18");
    this.abstractLink = Selector("#menu-item-668");
    this.animalCollectionLink = Selector("#menu-item-776");
    this.elephantCollectionLink = Selector("#menu-item-675");
    this.eroticNudeSeriesLink = Selector("#menu-item-672");
    this.sculptureLink = Selector("#menu-item-676");
    this.serigraphyLink = Selector("#menu-item-775");
    this.triptychSeriesLink = Selector("#menu-item-774");
    this.eventsLink = Selector("#menu-item-897");
    this.contactLink = Selector("#menu-item-132");
    this.itemBagLink = Selector(".ast-cart-menu-wrap");
  }
  async navElement(tab) {
    await t.click(this.navbar.withText(tab));
  }
}

export default Navbar;
