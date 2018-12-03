/**
 * 用于获取本机 ip 及端口号
 * 配置 dev-server 相关信息
 */
const os = require('os');

const port = 8018;

const getIPAdress = () => {
    const interfaces = os.networkInterfaces();
    for (let devName in interfaces) {
        const iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}

module.exports = {
    host: getIPAdress(),
    port
}
