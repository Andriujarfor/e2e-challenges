let ikea;

describe('Challenge #3 e2e practice', () => {
  before('getting ikea url', () => {
    cy.fixture('urls').then((urls) => {
      ikea = urls.ikeaUrl;
    });
  });

  it('Visiting Ikea web site and adding a product to the cart ', () => {
    cy.visit(ikea);

    cy.get('#onetrust-accept-btn-handler').click();

    cy.get('.hnf-header__hamburger > .hnf-btn > .hnf-btn__inner').click();

    cy.get('.hnf-menu__nav__main > :nth-child(1) > .hnf-link').click();

    cy.get(':nth-child(7) > [role="button"]').click();

    cy.get(':nth-child(7) > .hnf-menu__nav3 > .hnf-menu__nav3__main > :nth-child(14) > .hnf-link').click();

    cy.get(
      '[data-products="20522027,80507632,60511362,49430193"] > .pub__shoppable-image > .pub__shoppable-image__category-link > .pub__aspect-ratio-box > .pub__image'
    )
      .scrollIntoView({ duration: 2000 })
      .as('fornitureProduct');

    // cy.scrollTo(0, 550);

    cy.get('@fornitureProduct').click();

    cy.get(
      '[href="https://www.ikea.com/us/en/p/styrspel-gaming-chair-gray-red-80526089/#content"] > .pip-product-styles__item > .pip-aspect-ratio-box > .pip-image'
    ).click();

    cy.contains('Add to bag').scrollIntoView().click();

    cy.get('.rec-modal-header > .rec-btn > .rec-btn__inner').click();
  });

  it.only('try', () => {
    cy.visit('https://www.ikea.com/us/en/p/styrspel-gaming-chair-gray-red-80526089/#content');
    cy.contains('Add to bag').scrollIntoView().click();
    cy.get('.rec-modal-header > .rec-btn > .rec-btn__inner').click();
  });
});
