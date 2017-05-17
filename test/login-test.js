module.exports = {
    'Login: Step 1' : function (client) {
        client
            .url('https://lrc-thingymcbob.herokuapp.com/')
            .waitForElementVisible('body', 1000)
            .assert.title('L.R.C - Home')
            .assert.visible('button[id="2login"]', 1000)
            .click('button[id="2login"]')
            .pause(500)
    },
    'Login: Step 2' : function (client) {
        client
            .waitForElementVisible('body', 1000)
            .assert.title('L.R.C - Login')
            .setValue('input[id="uName"]', '10011')
            .setValue('input[id="passC"]', '2134')
            .click('button[id="loginBut"]')
            .pause(500)
    },
    'Login: Step 3' : function (client) {
        client
            .waitForElementVisible('body', 1000)
            .assert.title('L.R.C - Kitchen')
            .assert.visible('button[id="startBut"]', 1000)
            .assert.visible('button[id="stopBut"]', 1000)
            .end();
    }
};