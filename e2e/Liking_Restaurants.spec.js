const assert = require("assert");

Feature("Liking Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty favorite restaurants", ({ I }) => {
  I.seeElement("no-data-component");
  I.see(
    "You don't have a favorite restaurant yet.",
    "pierce/.no-data-description"
  );
});

Scenario("liking one restaurant", async ({ I }) => {
  I.seeElement("no-data-component");
  I.see(
    "You don't have a favorite restaurant yet.",
    "pierce/.no-data-description"
  );

  I.amOnPage("/");

  I.seeElement(".image-container a");
  const firstRestaurant = locate(".image-container a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.seeElement(".swal-button");
  I.click(".swal-button");

  I.amOnPage("/#/favorite");
  I.seeElement("restaurant-favorite-list");
  const likedRestaurantTitle = await I.grabTextFrom(
    "pierce/.image-container a"
  );

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
