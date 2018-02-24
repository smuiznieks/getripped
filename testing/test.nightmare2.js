const Nightmare = require('nightmare')
const assert = require('assert')

describe('Load a Page', function(){
    this.timeout('30s')

    let nightmare = null
    beforeEach(() => {
    nightmare = new Nightmare(

        describe('/ (Home Page)', () => {
            it('should load without error', done => {
                nightmare.goto('www.-.com')    
                .end()
                .then(fucntion(result {
                done()
                
                })
                .catch(done)
        })
    })
})