const BlackList = artifacts.require("BlackList");
const NoMintRewardPool = artifacts.require("NoMintRewardPool");
const LockPool = artifacts.require("LockPool");

module.exports = function (deployer) {
  deployer.deploy(BlackList, "0x11f7410a09464D737b50838715bf5720038cE429")
  .then(function() {
    return deployer.deploy(LockPool).then(function() {
        return deployer.deploy(NoMintRewardPool,
            "ChiffonToButter",
            "0x82d30e24708318c5da73accb7cebc1d0a1d86276", // reward token
            "0x17f94db94d9d6f10267c3bb9a35dafd7825de0fd", // lptoken
            2592000, // duration in second,30 * 24 * 60 * 60
            "0x11f7410a09464D737b50838715bf5720038cE429", // distribution account
            "0x11f7410a09464D737b50838715bf5720038cE429", // governance
            BlackList.address,
            "0x11f7410a09464D737b50838715bf5720038cE429", // witdraw admin account
            LockPool.address
        );
    });

  });

};
