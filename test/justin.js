module.exports = {
    'Order: Step 1' : function (client) {
        client
            .url('https://lrc-thingymcbob.herokuapp.com/')
            .waitForElementVisible('body', 1000)
            .assert.title('L.R.C - Home')
            .assert.visible('button[id="2menu"]', 1000)
            .click('button[id="2menu"]')
            .pause(500)
    },
    'Order: Step 2' : function (client) {
        client
            .waitForElementVisible('body', 1000)
            .assert.title('L.R.C - Menu')
            .assert.visible('button[id="checkBut"]', 1000)
            .setValue('input[id="item1Quant"]', '1')
            .click('button[id="item1"]')
            .pause(100)
            .setValue('input[id="item2Quant"]', '1')
            .click('button[id="item2"]')
            .pause(100)
            .click('button[id="checkBut"]')
            .pause(500)
    },
    'Order: Step 3' : function (client) {
        client
            .waitForElementVisible('body', 1000)
            .assert.title('L.R.C. - Cart')
            .assert.visible('butoon[id="submitBut"]', 1000)
            .pause(500)
            .click('button[id="backBut"]')
            .pause(500)
    },
    'Order: Step 4' : function (client) {
        client
            .waitForElementVisible('body', 1000)
            .assert.title('L.R.C - Menu')
            .assert.visible('button[id="checkBut"]', 1000)
            .setValue('input[id="item2Quant"]', '1')
            .click('button[id="item2"]')
            .pause(100)
            .setValue('input[id="item7Quant"]', '1')
            .click('button[id="item7"]')
            .pause(100)
            .click('button[id="checkBut"]')
            .pause(500)
    },
    'Order: Step 5' : function (client) {
        client
            .waitForElementVisible('body', 1000)
            .assert.title('L.R.C. - Cart')
            .assert.visible('butoon[id="submitBut"]', 1000)
            .pause(500)
            .click('button[id="submitBut"]')
            .end();
    }
};