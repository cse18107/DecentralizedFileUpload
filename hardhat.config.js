require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/770e743fead2417387ff6433ce5bd0ef`,
      accounts: ["6be5b7bf2a904765279c878a67ea819d58089626c512265dc6deba3b055f8751"],
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  }
};
