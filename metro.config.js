const blacklist = require('metro-config/src/defaults/blacklist');   // on top

module.exports = {
    resolver: {
        blacklistRE: blacklist([/#current-cloud-backend\/.*/])
    },
};