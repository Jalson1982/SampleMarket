Simple Market App
Welcome to the Simple Playground app, an easy-to-use mobile application for checking market data and searching IP addresses. This app utilizes Binance web sockets and the IP API for IP address searches. It features modern UI components from Shopify's Restyle and navigation handled by React Navigation.


## Prerequisites 📋

Before you begin, ensure you have the following installed:
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white)
- ![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
- ![Cocoapods](https://img.shields.io/badge/Cocoapods-EE3322?style=for-the-badge&logo=cocoapods&logoColor=white) (for iOS only)

## Getting Started 🚀

## Setup environment
```bash
echo IP_ADDRESS_URL=https://ipapi.co/ > .env
echo BINANCE_SOCKET=wss://stream.binance.com:443/ws/btcusdt >> .env

```

Or manually create a .env file in the root of the project and add: IP_ADDRESS_URL=https://ipapi.co/ and BINANCE_SOCKET=wss://stream.binance.com:443/ws/btcusdt

## Install dependencies
```bash
yarn install
```

## iOS Setup (if needed)
Navigate to the iOS directory and install the required pods:
```bash
cd ios
pod install
cd ..
```

## Run the Application
For Android: 
```bash
yarn android
```
For IOS: 
```bash
yarn ios
```
