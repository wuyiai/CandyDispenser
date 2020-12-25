const BlackList = artifacts.require("BlackList");
const NoMintRewardPool = artifacts.require("NoMintRewardPool");
const LockPool = artifacts.require("LockPool");

module.exports = function (deployer) {
  // deployer.deploy(BlackList, "0x11f7410a09464D737b50838715bf5720038cE429")
  // .then(function() {
  //   return deployer.deploy(LockPool).then(function() {
  //       return deployer.deploy(NoMintRewardPool,
  //           "MadeleineToButter",//"ChiffonToButter",
  //           "0x82d30e24708318c5da73accb7cebc1d0a1d86276", // reward token
  //           "0x3ca73de9175c046d4daf7bcdc31d908733562f1e",//"0x17f94db94d9d6f10267c3bb9a35dafd7825de0fd", // lptoken
  //           2592000, // duration in second,30 * 24 * 60 * 60
  //           "0x11f7410a09464D737b50838715bf5720038cE429", // distribution account
  //           "0x11f7410a09464D737b50838715bf5720038cE429", // governance
  //           BlackList.address,
  //           "0x11f7410a09464D737b50838715bf5720038cE429", // witdraw admin account
  //           60 * 5, // withdraw period
  //           LockPool.address
  //       );
  //   });

  // });

  deployer.deploy(BlackList, "0x11f7410a09464D737b50838715bf5720038cE429")
  .then(function() {
      return deployer.deploy(NoMintRewardPool,
          "WithdrawNoApply",//"ChiffonToButter",
          "0x82d30e24708318c5da73accb7cebc1d0a1d86276", // reward token
          "0x3ca73de9175c046d4daf7bcdc31d908733562f1e",//"0x17f94db94d9d6f10267c3bb9a35dafd7825de0fd", // lptoken
          2592000, // duration in second,30 * 24 * 60 * 60
          "0x11f7410a09464D737b50838715bf5720038cE429", // distribution account
          "0x11f7410a09464D737b50838715bf5720038cE429", // governance
          BlackList.address,
          "0x11f7410a09464D737b50838715bf5720038cE429", // witdraw admin account
          0, // withdraw period
          "0x0000000000000000000000000000000000000000" // lock pool address
      );
  });

};
