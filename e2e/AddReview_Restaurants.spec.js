Feature("Add Review Restaurants");

Before(({ I }) => {
  I.amOnPage("/");
});

// Scenario("showing restaurants list", ({ I }) => {
//   I.seeElement("restaurant-list");
//   I.seeElement("restaurant-item");
// });

Scenario("add review to one restaurant", ({ I }) => {
  I.seeElement("restaurant-list");
  I.seeElement("restaurant-item");

  I.seeElement(".image-container a");
  I.click(locate(".image-container a").first());

  I.seeElement("pierce/#inputName");
  I.seeElement("pierce/#inputReview");
  I.seeElement("pierce/#submit");

  I.type("pierce/#inputName", "matthewdesailly");
  I.type("pierce/#inputReview", "nice");
  I.click("pierce/#submit");
});
