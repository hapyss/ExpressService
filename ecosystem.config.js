const os = require('os');//获取本机ip地址模块
///获取本机ip///
function getIPAdress() {
    var interfaces = os.networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}
const myHost = getIPAdress();

module.exports = {
    apps: [{
        script: './bin/www.js',
        name: 'api-apps',
        watch: '.',
        env: {
            "NODE_ENV": "localhost",
            "host": `${myHost}`
        },
    }]
};
