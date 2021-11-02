Feature("Add Review Restaurants");

Before(({ I }) => {
  I.amOnPage("/");
});

Scenario("showing restaurants list", ({ I }) => {
  I.seeElement("restaurant-list");
  I.seeElement("restaurant-item");
});

Scenario("add review to one restaurant", ({ I }) => {
  I.seeElement("restaurant-list");
  I.seeElement("restaurant-item");

  I.seeElement(".image-container a");
  I.click(locate(".image-container a").first());

  I.seeElement("pierce/#inputName");
  I.seeElement("pierce/#inputReview");
  I.seeElement("pierce/#submit");

  I.appendField("pierce/#inputName", "matthewdesailly");
  I.appendField("pierce/#inputReview", "nice");
  I.click("pierce/#submit");

  I.see("matthewdesailly", "pierce/.user-name p");
  I.see("nice", "pierce/.user-review p");
});
