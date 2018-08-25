/**
 * A Simple Wrapper for LINE MEssanger Notify
 */

const request           = require("request-promise");
const fs                = require("fs");
const config            = require("./config");

class LineNotify {

    constructor(access_token) {
       /**
        * Example:
        * Initialize class Line notify token string
        * 
        *     let notify = LineNotify("ACCESS_TOKEN")
        * 
        * :parameter access_token : string
        */ 
        if(!access_token) {
            throw new Error("Please initialize with access_token argument.");
        }
        this.accessToken = access_token;
    }

    getHeaders() {
        return {"Authorization" : `Bearer ${this.accessToken}`}
    }

    sendMessage(message, image_path, sticker_id, package_id) {

        var data = {"message" : message}

        if(image_path && image_path.match(/^https?:\/\//)) {
            var data = {...data, "imageThumbnail" : image_path, "imageFullsize" : image_path}
        }   

        else if(image_path) {
            var data = {...data ,"imageFile" : fs.createReadStream(image_path)}
        }

        if(sticker_id && package_id) {
            var data = {...data, "stickerPackageId" : package_id, "stickerId" : sticker_id}
        }

        return this._req(`${config.BASE_API_URL}${config.NOTIFY_API_QUERY_PATH}`, this.getHeaders(), data) 

    }

    sendText(message = config.DEFAULT_MESSAGE['TEXT']) {
        /**
         * Example:
         *
         *     notify.sendText("Hello LINE Notify")
         *
         * :parameter message : string
         * :maximum character : 1000
         */   
         return this.sendMessage(message, null, null, null)     
    }


    sendImage(image_path = config.DEFAULT_MESSAGE['IMAGE'], 
              message = config.DEFAULT_MESSAGE['TEXT']) {
        /**
         * Example:
         *
         *     notify.sendImage("/home/albertoanggi/notify.png")
         *                          or
         *     notify.sendImageWithURL("http://scdn.line-apps.com/n/line_notice/img/og_160829/og_fb.png")
         *
         * :parameter image_path : string
         * 
         */
        return this.sendMessage(message, image_path, null, null)
    }

    sendSticker(sticker_id = config.DEFAULT_MESSAGE['STICKER'][0], 
                package_id = config.DEFAULT_MESSAGE['STICKER'][1], 
                message = config.DEFAULT_MESSAGE['TEXT']) {
        /**
         * Example:
         *
         *     notify.sendSticker(107, 1, "Hello LINE Notify")
         *     :file sticker list : https://devdocs.line.me/files/sticker_list.pdf
         *
         * :parameter sticker_id : integer
         * :parameter package_id : integer
         */

        return this.sendMessage(message, null, sticker_id, package_id);
    }

    status() {
        return this._req(`${config.BASE_API_URL}${config.STATUS_API_URL_QUERY_PATH}`, this.getHeaders())
    }

    revoke() {
        return this._req(`${config.BASE_API_URL}${config.REVOKE_API_URL_QUERY_PATH}`, this.getHeaders())
    }

    _req(uri, headers, data) {
        const method = uri.split("/")[4] === "status" ? "GET" : "POST";
        request({
            method   : method,
            url      : uri,
            resolveWithFullResponse: true,
            headers  : headers,
            formData : data ? data : {},
        })
        .then(res => {
            //const header = res.headers;
            /*
             * if you want see api-rate-limit, you can use :
             * console.log(header)
             */
            console.log(JSON.parse(res.body));
        })
        .catch(err => {
            console.log(JSON.parse(err.error));
        })
    }
}

module.exports = LineNotify;