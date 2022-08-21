const ethers = require("ethers")
const rpcURL =
    "https://eth-mainnet.g.alchemy.com/v2/gClkJVB2E2C-wUuolw-mWwGwmxjov0Y0"
const provider = new ethers.providers.JsonRpcProvider(rpcURL)

const main = async () => {
    const block = await provider.getBlockNumber()
    console.log(block)    
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
