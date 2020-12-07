const PoolManager = artifacts.require("PoolManager");
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

module.exports = async function (deployer) {
    await deployProxy(PoolManager, ['0x11f7410a09464D737b50838715bf5720038cE429'], { deployer, unsafeAllowCustomTypes: 'PoolEntity' });
};
