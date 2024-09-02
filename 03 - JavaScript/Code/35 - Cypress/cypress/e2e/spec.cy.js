describe('Example Cypress Page Load', () => {
  it('should load the page and display the correct elements', () => {
    cy.visit('https://todo.edu.skuflic.com');

    // Check if the title is correct
    cy.title().should('include', 'Skuflic.com To Do');

    // Check if the navigation bar is visible
    cy.get('.top-bar').should('be.visible');

    // Check if the "Getting Started" button is visible
    cy.contains('#top-bar-hide', 'close').should('be.visible');

    // Check if the search box is visible
    cy.get('#input').should('be.visible');
  });
});

describe('Form Submission', () => {
  it('should fill out and submit the form successfully', () => {
    cy.visit('https://todo.edu.skuflic.com');

    // Fill out the form fields
    cy.get('#input')
      .click()
      .type('This is a sample task created by automation from Cypress');
    cy.get('#category').select('Education');

    // Submit the form
    cy.get('#add').click();
  });
});

describe('Form Submission', () => {
  it('should mark the newly created task as complete', () => {
    cy.visit('https://todo.edu.skuflic.com');

    // Fill out the form fields
    cy.get('#list').children().last().click();
  });
});
