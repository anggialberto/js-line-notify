const config = {
    BASE_API_URL                : "https://notify-api.line.me",
    NOTIFY_API_QUERY_PATH       : "/api/notify",
    STATUS_API_URL_QUERY_PATH   : "/api/status",
    REVOKE_API_URL_QUERY_PATH   : "/api/revoke",

    DEFAULT_MESSAGE : {
        TEXT                    : "You have new message.",
        IMAGE                   : "default_image.png",
        IMAGE_WITH_URL          : "https://scdn.line-apps.com/n/line_notice/img/og_160829/og_fb.png",
        STICKER                 : [2, 1]
    }
}

module.exports = config;