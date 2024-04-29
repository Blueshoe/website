# Blueshoe website monorepo
Welcome to the Blueshoe website monorepo! This repository includes our website in german and english (each can be found in `de` / `io` respectively). There is also a shared component library which can be found in `blueshoe-core`.

## Development and building

### Prerequisites
#### node 
Please install node on your system. We recommend using [versionfox](https://vfox.lhan.me/) as it is a crossplatform solution for SDK management.

#### yarn
Both (de and io) require a modern yarn version. If you have not enabled this yet please execute:
```bash
corepack enable
```
After this command yarn v4+ should be available.

### Development
For developing either website variant `cd` into the respective directory and then execute:
- **once**: `yarn` (this installs all required dependencies)
- **every time**: `yarn dev` (this boots the development server and has to be executed every time you want to develop)

### Building
To build and preview each website variant `cd` into the respective directory and then execute:
- `yarn generate`
- `npx serve .output/public`