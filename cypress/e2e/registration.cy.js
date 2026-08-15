import { homePage } from '../pages/HomePage';
import { registrationForm } from '../pages/RegistrationForm';
import { garagePage } from '../pages/GaragePage';

const INVALID_BORDER_COLOR = 'rgb(220, 53, 69)';

const openRegistrationForm = () => {
    cy.get(homePage.signUpButton).click();
    cy.get(registrationForm.modalTitle).should('be.visible');
};

describe('Registration form', () => {

    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            }
        });

        openRegistrationForm();
    });

    it('should display "Registration" title', () => {
        cy.get(registrationForm.modalTitle)
            .should('be.visible')
            .and('have.text', 'Registration');
    });

    describe('Name field validation', () => {

        it('should show error and red border when name is empty', () => {
            cy.get(registrationForm.name.input).focus().blur();

            cy.get(registrationForm.name.error)
                .should('be.visible')
                .and('have.text', 'Name required');

            cy.get(registrationForm.name.input)
                .should('have.css', 'border-color', INVALID_BORDER_COLOR);
        });

        it('should show error when name contains invalid characters', () => {
            cy.get(registrationForm.name.input).type('John1').blur();

            cy.get(registrationForm.name.error)
                .should('be.visible')
                .and('have.text', 'Name is invalid');

            cy.get(registrationForm.name.input)
                .should('have.css', 'border-color', INVALID_BORDER_COLOR);
        });

        it('should show error when name is shorter than 2 characters', () => {
            cy.get(registrationForm.name.input).type('J').blur();

            cy.get(registrationForm.name.error)
                .should('be.visible')
                .and('have.text', 'Name has to be from 2 to 20 characters long');

            cy.get(registrationForm.name.input)
                .should('have.css', 'border-color', INVALID_BORDER_COLOR);
        });

        it('should show error when name is longer than 20 characters', () => {
            cy.get(registrationForm.name.input).type('a'.repeat(21)).blur();

            cy.get(registrationForm.name.error)
                .should('be.visible')
                .and('have.text', 'Name has to be from 2 to 20 characters long');

            cy.get(registrationForm.name.input)
                .should('have.css', 'border-color', INVALID_BORDER_COLOR);
        });

        it('should trim leading/trailing spaces and accept a valid name', () => {
            cy.get(registrationForm.name.input).type('  John  ').blur();

            cy.get(registrationForm.name.error).should('not.exist');
        });

    });

    describe('Last name field validation', () => {

        it('should show error and red border when last name is empty', () => {
            cy.get(registrationForm.lastName.input).focus().blur();

            cy.get(registrationForm.lastName.error)
                .should('be.visible')
                .and('have.text', 'Last name required');

            cy.get(registrationForm.lastName.input)
                .should('have.css', 'border-color', INVALID_BORDER_COLOR);
        });

        it('should show error when last name contains invalid characters', () => {
            cy.get(registrationForm.lastName.input).type('Doe1').blur();

            cy.get(registrationForm.lastName.error)
                .should('be.visible')
                .and('have.text', 'Last name is invalid');

            cy.get(registrationForm.lastName.input)
                .should('have.css', 'border-color', INVALID_BORDER_COLOR);
        });

        it('should show error when last name is shorter than 2 characters', () => {
            cy.get(registrationForm.lastName.input).type('D').blur();

            cy.get(registrationForm.lastName.error)
                .should('be.visible')
                .and('have.text', 'Last name has to be from 2 to 20 characters long');

            cy.get(registrationForm.lastName.input)
                .should('have.css', 'border-color', INVALID_BORDER_COLOR);
        });

        it('should show error when last name is longer than 20 characters', () => {
            cy.get(registrationForm.lastName.input).type('a'.repeat(21)).blur();

            cy.get(registrationForm.lastName.error)
                .should('be.visible')
                .and('have.text', 'Last name has to be from 2 to 20 characters long');

            cy.get(registrationForm.lastName.input)
                .should('have.css', 'border-color', INVALID_BORDER_COLOR);
        });

        it('should trim leading/trailing spaces and accept a valid last name', () => {
            cy.get(registrationForm.lastName.input).type('  Doe  ').blur();

            cy.get(registrationForm.lastName.error).should('not.exist');
        });

    });

    describe('Email field validation', () => {

        it('should show error and red border when email is empty', () => {
            cy.get(registrationForm.email.input).focus().blur();

            cy.get(registrationForm.email.error)
                .should('be.visible')
                .and('have.text', 'Email required');

            cy.get(registrationForm.email.input)
                .should('have.css', 'border-color', INVALID_BORDER_COLOR);
        });

        const invalidEmails = [
            'plainaddress',
            'missing@domain',
            '@missingusername.com',
            'user@.com',
            'user name@example.com',
            'user@example..com',
        ];

        invalidEmails.forEach((email) => {
            it(`should show error for invalid email: "${email}"`, () => {
                cy.get(registrationForm.email.input).type(email).blur();

                cy.get(registrationForm.email.error)
                    .should('be.visible')
                    .and('have.text', 'Email is incorrect');

                cy.get(registrationForm.email.input)
                    .should('have.css', 'border-color', INVALID_BORDER_COLOR);
            });
        });

    });

    describe('Password field validation', () => {

        const invalidPasswords = [
            'Pass1',
            'Password12345678',
            'password1',
            'PASSWORD1',
            'Password',
        ];

        invalidPasswords.forEach((password) => {
            it(`should show error for invalid password: "${password}"`, () => {
                cy.get(registrationForm.password.input).type(password).blur();

                cy.get(registrationForm.password.error)
                    .should('be.visible')
                    .and('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');

                cy.get(registrationForm.password.input)
                    .should('have.css', 'border-color', INVALID_BORDER_COLOR);
            });
        });

        it('should show error and red border when password is empty', () => {
            cy.get(registrationForm.password.input).focus().blur();

            cy.get(registrationForm.password.error)
                .should('be.visible')
                .and('have.text', 'Password required');

            cy.get(registrationForm.password.input)
                .should('have.css', 'border-color', INVALID_BORDER_COLOR);
        });

    });

    describe('Re-enter password field validation', () => {

        it('should show error and red border when re-enter password is empty', () => {
            cy.get(registrationForm.reEnterPassword.input).focus().blur();

            cy.get(registrationForm.reEnterPassword.error)
                .should('be.visible')
                .and('have.text', 'Re-enter password required');

            cy.get(registrationForm.reEnterPassword.input)
                .should('have.css', 'border-color', INVALID_BORDER_COLOR);
        });

        it('should show error when passwords do not match', () => {
            cy.get(registrationForm.password.input).type('Password1', { sensitive: true }).blur();
            cy.get(registrationForm.reEnterPassword.input).type('Password2', { sensitive: true }).blur();

            cy.get(registrationForm.reEnterPassword.error)
                .should('be.visible')
                .and('have.text', 'Passwords do not match');

            cy.get(registrationForm.reEnterPassword.input)
                .should('have.css', 'border-color', INVALID_BORDER_COLOR);
        });

    });

    describe('Register button', () => {

        it('should be disabled by default when the form is empty', () => {
            cy.get(registrationForm.registerButton).should('be.disabled');
        });

        it('should be disabled when any field is invalid', () => {
            cy.get(registrationForm.name.input).type('John').blur();
            cy.get(registrationForm.lastName.input).type('Doe').blur();
            cy.get(registrationForm.email.input).type('invalid-email').blur();
            cy.get(registrationForm.password.input).type('Password1', { sensitive: true }).blur();
            cy.get(registrationForm.reEnterPassword.input).type('Password1', { sensitive: true }).blur();

            cy.get(registrationForm.registerButton).should('be.disabled');
        });

        it('should be enabled and create a new user when all data is valid', () => {
            const uniqueEmail = `qa_user_${Date.now()}@test.com`;

            cy.get(registrationForm.name.input).type('John').blur();
            cy.get(registrationForm.lastName.input).type('Doe').blur();
            cy.get(registrationForm.email.input).type(uniqueEmail).blur();
            cy.get(registrationForm.password.input).type('Password1', { sensitive: true }).blur();
            cy.get(registrationForm.reEnterPassword.input).type('Password1', { sensitive: true }).blur();

            cy.get(registrationForm.registerButton)
                .should('not.be.disabled')
                .click();

            cy.url().should('include', '/panel/garage');
            cy.get(garagePage.heading).should('be.visible').and('have.text', 'Garage');
        });

    });

});