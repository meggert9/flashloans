const dydxMainnet = require('./dydx-mainnet.json');
const kyberMainnet = require('./kyber-mainnet.json');
const tokensMainnet = require('./tokens-mainnet.json');
const uniswapMainnet = require('./uniswap-mainnet.json');

module.exports = {
    mainnet: {
        kyber: kyberMainnet,
        uniswap: uniswapMainnet,
        dydx: dydxMainnet,
        tokens: tokensMainnet
    }
};
