# ![logo](/assets/icon-linenotify.png) JS LINE Notify

 [![Version 1.0.0](https://img.shields.io/badge/version-1.0.0-green.svg "Version 1.0.0")](#) [![LICENSE](https://img.shields.io/badge/licence-MIT-blue.svg "LICENSE")](https://github.com/albertoanggi/js-line-notify/blob/master/LICENSE) [![Supported node.js versions: 8.11.4](https://img.shields.io/badge/node-8.11.4-green.svg "Supported node.js versions: 8.11.4")](https://nodejs.org/en/)

*Simple API LINE Notify*

----

## Requirement

* Node.js v8.11.4
* NPM v6.4.0
* request
* request-promise
* fs

## Installation

Installation is simple. It can be installed from NPM from github:
```npm
$ npm install https://github.com/albertoanggi/js-line-notify (Coming soon)
```

## Generate LINE Notify Token

[https://notify-bot.line.me/my/](https://notify-bot.line.me/my/)

## Usage
Initialization

```javascript
const LineNotify = require("./src/client");

const ACCESS_TOKEN = "TOKEN_HERE!";
const notify = new LineNotify(`${ACCESS_TOKEN}`);
```

***Example : sendText()***

```javascript
notify.sendText("Halo Enji");
```

***Example : sendImage()***

```javascript
notify.sendImage("https://scdn.line-apps.com/n/line_notice/img/og_160829/og_fb.png");
```

```javascript
notify.sendImage("default_image.png");
```

***Example : sendText()***

```javascript
notify.sendText("Halo Enji");
```

