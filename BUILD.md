# Building From Source

This repository contains a hot-reloading sandbox for developing the `@bytescale/upload-widget-react` NPM package.

## Prerequisites

`node` and `npm` are required — we actively support the following versions:

| Package | Version  |
| ------- | -------- |
| Node    | v18.12.1 |
| NPM     | v8.19.2  |

## How To Build & Run

### 1. Clone

```shell
git clone git@github.com:bytescale/upload-widget-react.git
cd upload-widget-react
```

### 2. Setup Environment

```
export NODE_OPTIONS=--openssl-legacy-provider
```

### 3. Install Dependencies

```shell
npm install
```

### 4. Run The Tests

```shell
npm test
```

Note: there is no hot-reloading demo for `@bytescale/upload-widget-react`. Please see the `@bytescale/upload-widget` repository instead.
