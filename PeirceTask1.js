describe('Test of 24MX', function () {
    this.beforeAll('Open 24MX', function(){
        cy.visit('https://www.24mx.ie/');
       cy.viewport(1300,900)
    });

    it ('As a buyer, I want to add an Adventure Helmet to the shopping cart', function(){
        cy.get('a').contains(" Motocross Gear ").click({ force: true });
        cy.get('a').contains(" Helmets ").click({ force: true });
        cy.get('a').contains("Adventure Helmets").click({ force: true });
        cy.wait(5000)

        cy.get('a').contains("O'Neal Sierra Adventure Helmet Yellow-Black").click({ force: true });
        cy.get('div').contains("Select - Helmet Sizes").click({ force: true });
        cy.get('div').contains("M 57-58cm").click({ force: true });
        cy.get('button').contains(" Add to cart ").should('have.class','m-button__default').click({ force: true });

        cy.wait(10000)
        cy.log("Test Completed Successfully")
    });

    xit ('As a buyer, I want to search for Jackets', function(){
        cy.viewport(1300,900)
        cy.get('[id="search-desktop"]').type('Jacket{enter}');
        cy.wait(5000)
        cy.log("Test Completed Successfully")
    });

    xit ('As a buyer, I want to see the products for cleaning', function(){
        cy.viewport(1300,900)
        cy.wait(5000)       
        cy.contains(" Motocross Accessories ").click({ force: true });
        cy.contains(" Washing & Cleaning ").click({ force: true });
        cy.expect(' Washing & Cleaning ')
        cy.log("Test Completed Successfully")
    });

    xit ('As a buyer, I want to view the 60 day return policy', function(){
        cy.contains('60-day return policy*').click({ force: true });
        cy.wait(5000)
        cy.log("Test Completed Successfully")
    }); 

    xit ('As a buyer, I want to read about 24MX', function(){
        cy.viewport(1300,900)
        cy.get('a').contains(' About 24mx.ie ').click({ force: true });
        expect(' About 24mx.ie ');
        cy.wait(5000)
        cy.log("Test Completed Successfully")
    }); 

    xit ('As a buyer, I want to check out the brands section', function(){
        cy.viewport(1300,900)
        cy.contains('Brands').click({ force: true });
        cy.expect(' Brands ')
        cy.wait(5000)
        cy.log("Test Completed Successfully")
    });   
     
})