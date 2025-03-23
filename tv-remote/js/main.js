const APP_PER_LINE = 3;

// JavaScript monkey-patching needed for Safari/iOS
String.prototype.startsWith = function (prefix) {
    return this.indexOf(prefix) === 0;
}

function isLineFirstCell(index) {
    return index % APP_PER_LINE === 0;
}

function init() {
    if (config.apps) {
        for (let i = 0; i < config.apps.length; i++) {
            var appGroupId = "appGroup" + Math.floor(i / APP_PER_LINE);
            if (isLineFirstCell(i)) {
                $("#app").before("<div id='" + appGroupId + "' class='row'></div>");
            }
            var app = config.apps[i];
            $("#" + appGroupId).append("<div class='col-md-4 col-xs-4 button'>" +
                "  <button id='app/" + app.id + "' class='full'><span>" + app.name + "</span></button>" +
                "</div>");
        }
    }

    let button = $("button");
    button.bind('touchstart mousedown', setButtonBackgroundColor);
    button.click(sendKey);
    addEventListener("mouseup", resetButtonBackgroundColor);
    addEventListener("touchend", resetButtonBackgroundColor);
}

function setButtonBackgroundColor() {
    $(this).css("background-color", "red");
}

function sendKey() {
    $.post(config.apiSamsungTvBaseUrl + "/" + this.id + "?ts=" + Date.now());
}

function resetButtonBackgroundColor() {
    $("button").css("background-color", "#424242");
}
