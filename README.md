# Ethereum Address Lifecycle Example

This small project demonstrates the lifecycle of an Ethereum address using `ethers.js`.  It is intended for educational purposes, illustrating how to generate wallets, derive HD nodes, inspect keys, compute addresses, sign and verify messages, and derive multiple accounts from a single seed.

## Prerequisites

- Node.js (v16 or newer recommended)
- npm or yarn

## Installation

```bash
npm install ethers
```

## Usage

Run the example script:

```bash
node lifecycle.js
```

You should see output showing steps such as mnemonic generation, key derivation, address computation, checksum validation, message signing, signature verification, and multiple account derivations.

## Files

- `lifecycle.js` - main script demonstrating the address lifecycle using ethers.js

## Notes

- The script uses the BIP-44 path `m/44'/60'/0'/0/0` for Ethereum addresses.
- The `ethers` library provides utilities for HD wallets and cryptographic operations.

Feel free to explore and modify the script to learn more about Ethereum cryptography!
