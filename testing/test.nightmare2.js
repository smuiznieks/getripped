const Nightmare = require('nightmare')
const assert = require('assert')

describe('Load a Page', function(){
    this.timeout('60s')

    let nightmare = null
    beforeEach(() => {
    nightmare = new Nightmare(

        describe('/ (Home Page)', () => {
            it('should load without error', done => {
                nightmare.goto(' insert heroku main website/app link ')    
                .end()
                .then(fucntion(result {
                done()
                
                })
                .catch(done)
        })
    })
})
