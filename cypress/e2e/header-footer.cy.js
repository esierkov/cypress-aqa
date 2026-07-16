import { homePage } from '../pages/HomePage';

describe('Header and Footer elements', () => {

    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            }
        });
    });


    it('should display all header elements', () => {

        cy.get(homePage.header.aboutButton)
            .should('be.visible');

        cy.get(homePage.header.contactsButton)
            .should('be.visible');

        cy.get(homePage.header.guestLoginButton)
            .should('be.visible');

        cy.get(homePage.header.signInButton)
            .should('be.visible');

        cy.get(homePage.header.logo)
            .should('be.visible');

        cy.get(homePage.header.homeLink)
            .should('be.visible');

    });


    it('should display all footer links', () => {

        cy.get(homePage.footer.facebookLink)
            .should('be.visible');

        cy.get(homePage.footer.telegramLink)
            .should('be.visible');

        cy.get(homePage.footer.youtubeLink)
            .should('be.visible');

        cy.get(homePage.footer.instagramLink)
            .should('be.visible');

        cy.get(homePage.footer.linkedInLink)
            .should('be.visible');

        cy.get(homePage.footer.hillelLink)
            .should('be.visible');

        cy.get(homePage.footer.supportEmail)
            .should('be.visible');

    });

});