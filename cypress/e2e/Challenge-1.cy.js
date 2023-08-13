let amazon;

describe('Challenge #1 e2e practice', () => {
  before('getting amazon url', () => {
    cy.fixture('urls').then((urls) => {
      amazon = urls.amazonUrl;
    });
  });

  it('Going to the Wishlist and being redirected', () => {
    cy.visit(amazon);

    cy.get('#nav-link-accountList').trigger('mouseover');

    cy.contains('Watchlist').click();

    cy.get('.a-padding-extra-large > .a-spacing-small').should('be.visible');

    cy.get('#createAccountSubmit').should('be.visible');
  });
});
