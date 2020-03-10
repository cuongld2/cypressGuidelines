

describe('Success case', function(){

    beforeEach(function(){

        cy.visit('https://www.amazon.com/');
        cy.get('#nav-link-accountList').trigger('mouseover');
        cy.get('#nav-flyout-ya-newCust > a').click();

    });

    it('Visit amazon home page', function () {

        cy.get('#ap_customer_name').click().type('Donald Cuong');
        cy.get('#ap_email').click().type('akkaka99@gmail.com');
        cy.get('#ap_password').click().type('Akkaka123');
        cy.get('#ap_password_check').click().type('Akkaka123');
        cy.get('#continue').click();

    })

});