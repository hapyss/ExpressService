//这个是config-lite配置文件，如果通过pm2配置文件ecosystem.config.js启动，就不用使用该插件单独配置了。
module.exports = {
    server: {
        host: "localhost",
        port: 8082
    }
};