import { profilePage } from '../pages/ProfilePage';
import { garagePage } from '../pages/GaragePage';

describe('Garage', () => {

    beforeEach(() => {
        const { email, password } = Cypress.env('user');

        cy.login(email, password);
    });

    it('should open Garage page and add car', () => {
        cy.get(profilePage.garageButton)
            .should('be.visible')
            .click();

        cy.url().should('include', '/panel/garage');

        cy.get(garagePage.heading)
            .should('be.visible')
            .and('have.text', 'Garage');

        cy.get(garagePage.addCarButton)
            .should('be.visible')
            .click();

        cy.get(garagePage.brandSelect)
            .should('be.visible')
            .select('Audi');

        cy.get(garagePage.modelSelect)
            .should('be.visible')
            .select('TT');

        cy.get(garagePage.mileageInput)
            .type('1000');

        cy.get(garagePage.addButton)
            .click();

        cy.get(garagePage.heading)
            .should('be.visible')
            .and('have.text', 'Garage');

        cy.get(garagePage.carName)
            .should('be.visible')
            .and('contain', 'Audi TT');

        cy.get(garagePage.carMileage)
            .should('be.visible')
            .and('have.value', '1000');

        cy.get(garagePage.addExpenseButton)
            .first()
            .should('be.visible')
            .click();

        cy.get(garagePage.addExpenseMileage)
            .clear()
            .type('2000');

        cy.get(garagePage.addExpenseLiters)
            .type('40');

        cy.get(garagePage.addExpenseTotalCost)
            .type('250');

        cy.get(garagePage.addButton)
            .click();
    });

});