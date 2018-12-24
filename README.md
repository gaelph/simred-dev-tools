# simred-dev-tools [![NPM version](https://badge.fury.io/js/simred-dev-tools.svg)](https://npmjs.org/package/simred-dev-tools) ![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg) ![Tests](https://img.shields.io/badge/tests-22%2F22-brightgreen.svg) ![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)

> Bindings to redux-dev-tools for Simred

If you do not know what Simred is, checkout [the project's GitHub page]()

## Installation

```sh
$ npm install --save simred-dev-tools
```

## Usage

```js
import devToolsMiddleware from 'simred-dev-tools'
import Simred from 'simred'

const store = Simred.createStore(rootReducer, {}, [devToolsMiddleware])
```

## License

MIT © [Gaël PHILIPPE](https://github.com/gaelph)
