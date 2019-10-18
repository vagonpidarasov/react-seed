describe('Hello World', function() {
    before(function() {
        cy.server();
        cy.route({method: 'GET', url: `**/hello-world`, response: {payload: 'content'}}).as('HelloWorld');
        cy.viewport('macbook-15');
        cy.visit('index.html');
    });

    it('renders content', () => {
        cy.wait('@HelloWorld');
        cy.get('[data-test-id=hello-world]').contains('content');
    });
});
