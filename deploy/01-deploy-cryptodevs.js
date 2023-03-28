const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../helper-hardhat-config")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = [METADATA_URL, WHITELIST_CONTRACT_ADDRESS]

    await deploy("CryptoDevs", {
        from: deployer,
        log: true,
        args: args,
    })
    log("CryptoDevs Deployed!")
    log("-----------------------------------------------")
}

module.exports.tags = ["all", "cryptodevs"]
