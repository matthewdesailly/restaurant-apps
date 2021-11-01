Feature("Unliking Restaurants");

Before(({ I }) => {
  I.amOnPage("/");
  I.seeElement(".image-container a");
  I.click(locate(".image-container a").first());

  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.seeElement(".swal-button");
  I.click(".swal-button");
});

Scenario("showing favorite restaurants", ({ I }) => {
  I.amOnPage("/#/favorite");
  I.seeElement("restaurant-favorite-list");
  I.seeElement("restaurant-favorite-item");
});

Scenario("Unliking one restaurant", ({ I }) => {
  I.amOnPage("/#/favorite");

  I.seeElement(".image-container a");
  I.click(locate(".image-container a").first());

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.seeElement(".swal-button");
  I.click(".swal-button");

  I.amOnPage("/#/favorite");
  I.seeElement("no-data-component");
  I.see(
    "You don't have a favorite restaurant yet.",
    "pierce/.no-data-description"
  );
});
