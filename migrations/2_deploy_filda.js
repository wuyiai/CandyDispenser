const Storage = artifacts.require("Storage");
const math = artifacts.require("Math");
const SafeMath = artifacts.require("SafeMath");
const Address = artifacts.require("Address");
const SafeERC20 = artifacts.require("SafeERC20");
const NoMintRewardPool = artifacts.require("NoMintRewardPool");

module.exports = function (deployer) {
  deployer.deploy(math);
  deployer.deploy(SafeMath);
  deployer.deploy(Address);
  deployer.deploy(SafeERC20);
  deployer.deploy(Storage)
  .then(function() {
    return deployer.deploy(NoMintRewardPool,
    "0x82d30e24708318c5da73accb7cebc1d0a1d86276", // reward token
    "0x17f94db94d9d6f10267c3bb9a35dafd7825de0fd", // lptoken
    2592000, // duration in second,30 * 24 * 60 * 60
    "0x11f7410a09464D737b50838715bf5720038cE429", // distribution address
    Storage.address,
    "0x82d30e24708318c5da73accb7cebc1d0a1d86276", // source Vault
    "0x82d30e24708318c5da73accb7cebc1d0a1d86276" // migration Strategy
    );
  });

};
