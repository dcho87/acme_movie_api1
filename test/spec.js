const { expect } = require('chai')

describe('Test', () => {
    describe('Test1', () => {
        it('testing testing', async()=> {
            const test = 'testing'
            expect(test).to.equal('testing')
        })
    })
})