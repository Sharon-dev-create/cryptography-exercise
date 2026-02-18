import { ethers } from "ethers";

async function main() {
  console.log("=== ETHEREUM ADDRESS LIFECYCLE (ethers.js) ===\n");

  // 1. Generate random wallet (entropy → mnemonic)
  const wallet = ethers.Wallet.createRandom();
  console.log("Mnemonic:");
  console.log(wallet.mnemonic.phrase, "\n");

  // 2. Derive HD wallet using Ethereum BIP-44 path
  const hdWallet = ethers.HDNodeWallet.fromPhrase(
    wallet.mnemonic.phrase,
    "",
    "m/44'/60'/0'/0/0"
  );

  // 3. Keys
  console.log("Private Key:", hdWallet.privateKey);
  console.log("Public Key :", hdWallet.publicKey);

  // 4. Address (Keccak256 + last 20 bytes + checksum)
  console.log("Address    :", hdWallet.address);

  // 5. Checksum validation (EIP-55)
  const checksummed = ethers.getAddress(hdWallet.address);
  console.log("Checksum OK:", checksummed === hdWallet.address);

  // 6. Sign message (ECDSA secp256k1)
  const message = "I own this Ethereum address";
  const signature = await hdWallet.signMessage(message);
  console.log("\nMessage    :", message);
  console.log("Signature  :", signature);

  // 7. Verify signature (public recovery)
  const recoveredAddress = ethers.verifyMessage(message, signature);
  console.log("\nRecovered Address:", recoveredAddress);
  console.log(
    "Signature Valid  :",
    recoveredAddress === hdWallet.address
  );

  // 8. Derive multiple accounts from same seed
  console.log("\n=== MULTIPLE ACCOUNTS ===");
  for (let i = 0; i < 3; i++) {
    const child = ethers.HDNodeWallet.fromPhrase(
      wallet.mnemonic.phrase,
      "",
      `m/44'/60'/0'/0/${i}`
    );
    console.log(`Account ${i}: ${child.address}`);
  }
}

main();
