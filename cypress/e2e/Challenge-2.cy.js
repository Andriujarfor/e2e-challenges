let amazon;

describe('Challenge #2 e2e practice', () => {
  before('getting amazon url', () => {
    cy.fixture('urls').then((urls) => {
      amazon = urls.amazonUrl;
    });
  });

  it('Changing current products currency', () => {
    cy.visit(amazon);

    cy.get('.icp-nav-link-inner').click();

    cy.get('#icp-currency-dropdown-selected-item-prompt > .a-button-inner > .a-button-text').click();

    cy.get('#icp-currency-dropdown_19').click();

    cy.get('#icp-save-button > .a-button-inner > .a-button-input').click();
  });
});
