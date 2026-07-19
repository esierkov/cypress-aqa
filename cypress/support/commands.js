import { homePage } from '../pages/HomePage';
import { loginForm } from '../pages/LoginForm';
import { garagePage } from '../pages/GaragePage';

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
        options.log = false;
        Cypress.log({
            $el: element,
            name: 'type',
            message: '*'.repeat(text.length),
        });
    }

    return originalFn(element, text, options);
});

Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://qauto.forstudy.space/', {
        auth: {
            username: 'guest',
            password: 'welcome2qauto'
        }
    });

    cy.get(homePage.header.signInButton).click();
    cy.get(loginForm.modalTitle).should('be.visible');

    cy.get(loginForm.email.input).type(email);
    cy.get(loginForm.password.input).type(password, { sensitive: true });

    cy.get(loginForm.loginButton).click();

    cy.url().should('include', '/panel/garage');
    cy.get(garagePage.heading).should('be.visible').and('have.text', 'Garage');
});