# Ethereum Whale Tracker

## Overview

This script listens for large transfers of a specific token on the Ethereum blockchain. It uses the ethers.js library to interact with the Ethereum network and listens for the `Transfer` event on a specific smart contract. When a transfer exceeds a predefined threshold, the script logs the details of the transaction.

## Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/SanderLoman/walletTracker.git
   ```

2. Navigate to the project directory.
   ```bash
   cd walletTracker
   ```
3. Install the dependencies.
   ```bash
   npm i
   ```
   or
   ```bash
   yarn
   ```
   
## Configuration (You need to provide these if you want to listen to other contract address)
- rpcURL: The URL of the Ethereum RPC node.
- CONTRACT_ADDRESS: The address of the token contract.
- CONTRACT_ABI: The ABI of the token contract.
- TRANSFER_THRESHOLD: The minimum amount of tokens that should be transferred for the event to be considered.

## Usage
Run the script.

   ```bash
   node index.js
   ```
