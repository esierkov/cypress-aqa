export const registrationForm = {

    modalTitle: '.modal-title',

    name: {
        input: 'input[id="signupName"]',
        error: 'input[id="signupName"]+div[class="invalid-feedback"] p',
    },

    lastName: {
        input: 'input[id="signupLastName"]',
        error: 'input[id="signupLastName"]+div[class="invalid-feedback"] p',
    },

    email: {
        input: 'input[id="signupEmail"]',
        error: 'input[id="signupEmail"]+div[class="invalid-feedback"] p',
    },

    password: {
        input: 'input[id="signupPassword"]',
        error: 'input[id="signupPassword"]+div[class="invalid-feedback"] p',
    },

    reEnterPassword: {
        input: 'input[id="signupRepeatPassword"]',
        error: 'input[id="signupRepeatPassword"]+div[class="invalid-feedback"] p',
    },

    registerButton: '.modal-footer .btn-primary',

};