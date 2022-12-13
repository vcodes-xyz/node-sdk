# vcodes.js

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][node-url]

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install vcodes.js
```

## Usage

```js
const { Client } = require("vcodes.js");
const client = new Client("Your-Token");
```

## Functions 

| Usage | Params | @returns
|-------|----------|----------|
| client.getVoters() | No params needed | Promise<>
| client.checkVote(userId) | userId | Promise<>
|---
| client.getAnnouncements() | No params needed | Promise<>
| client.addAnnouncement({}) | title, description | Promise<>
| client.deleteAnnouncement(id) | id | Promise<>
|---
| client.addCommand({}) | name, description, syntax, category? | Promise<>
| client.getCommands(id) | id | Promise<>
| client.editCommand({}) | id, name, description, syntax, category? | Promise<>
| client.deleteCommand(id) | No params needed | Promise<>
| client.setUses({}) | id, uses | Promise<>


## Events

| Name 
|------|
| ready
| reconnected 
| reconnecting 
| reminder
| vote   


## License

[MIT](LICENSE)

[node-url]: https://nodejs.org/en/download
[npm-downloads-image]: https://badgen.net/npm/dm/vcodes.js
[npm-url]: https://npmjs.org/package/vcodes.js
[npm-version-image]: https://badgen.net/npm/v/vcodes.js