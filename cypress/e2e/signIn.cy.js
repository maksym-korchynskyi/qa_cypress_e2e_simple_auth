/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login with valid credentials', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.contains('#flash', 'You logged into a secure area!').should('exist');
  });

  it('should show the error for an invalid username', () => {
    cy.login('tomsmith2', 'SuperSecretPassword!');
    cy.contains('#flash', 'Your username is invalid!').should('exist');
  });

  it('should show the error for an invalid password', () => {
    cy.login('tomsmith', 'SuperBadPassword!');
    cy.contains('#flash', 'Your password is invalid!').should('exist');
  });

  it('should logout', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');

    cy.get('.button').click();
    cy.contains('#flash', 'You logged out of the secure area!').should('exist');
  });
});
