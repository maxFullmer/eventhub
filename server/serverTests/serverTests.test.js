const serverTests = require('./serverTests');

// unit tests
describe('functions', () => {
    describe('function1', () => {
        it('should return some/this value', () => {
            const str = 'blah';
            const num = 2;
            expect(serverTests.function1(str, num)).toBe();
        })
    })
})

// integraton aka E2E tests
describe('Integration aka E2E tests', () => {
    describe('integratonTest1', () => {
        describe('functionForIntegrationTestA', () => {
            
        })
        
        describe('functionForIntegrationTestB', () => {

        })
    })


    describe('integratonTest2', () => {
        describe('functionForIntegrationTestA', () => {
            
        })

        describe('functionForIntegrationTestB', () => {

        })
    })
})