var webdriverio = require('webdriverio'),
    options = {
        desiredCapabilities: {
            browserName: 'firefox',
            "moz:firefoxOptions": {
                "prefs": {
                    "permissions.default.camera": 1,
                    "permissions.default.microphone": 1,
                    "media.devices.insecure.enabled": true,
                    "media.getusermedia.insecure.enabled": true,
                    "media.navigator.streams.fake": true,
                    "media.navigator.permission.disabled": true
                }
            }
        },
        host: 'selenium',
        port: 4444
    }


webdriverio
    .remote(options)
    .init()
    .url('http://client:8443/index.html?ws_uri=ws://10.0.22.23:8888/kurento')
    .call(async function () {
        for (let i = 0; ; i++) {
            console.log(`Testing client for ${i * 10}s`);
            await new Promise(r => setTimeout(r, 10000));
        }
    })
    .catch(function (e) {
        console.log(e)
    })
    .end()
