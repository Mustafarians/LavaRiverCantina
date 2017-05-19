module.exports = {
    'Order: Step 1': function (client) {
        client
            .url('https://lrc-thingymcbob.herokuapp.com/')
            .waitForElementVisible('body', 1000)
            .assert.title('L.R.C - Home')
            .assert.visible('button[id="2menu"]', 1000)
            .click('button[id="2menu"]')
            .pause(500)
    }
};