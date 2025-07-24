# FlashCopyBot

A latency-optimized Solana Flashloan Copy Trading Bot.

## Goal

- Analyze profitable arbitrage wallets in real-time
- Simulate swap bundles using local DEX price data
- Submit bundles via Jito Block Engine to ensure optimal execution
- Avoid frontrunning and maximize legitimate arbitrage profits

## Technologies

- Solana JSON-RPC (Helius)
- Solend Flashloans
- Jito Block Engine
- Web3.js & Node.js
- Local latency-optimized infra (12 ms ping to Frankfurt)

## Note

This repository contains only the modular structure. The core logic is under development.
Wallet keys and trading logic are excluded for security reasons.
