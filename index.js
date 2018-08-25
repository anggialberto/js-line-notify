const LineNotify = require("./src/client");

const ACCESS_TOKEN = "TOKEN_HERE!";
const notify = new LineNotify(`${ACCESS_TOKEN}`);

//notify.sendText("Halo Enji");
//notify.sendImage("https://scdn.line-apps.com/n/line_notice/img/og_160829/og_fb.png");
//notify.sendImage("Capture.jpg");
//notify.sendSticker(2, 1);

//notify.status()
//notify.revoke()