// JavaScript monkey-patching needed for Safari/iOS
String.prototype.startsWith = function (prefix) {
    return this.indexOf(prefix) === 0;
}

function init() {
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
    $.post(config.apiSamsungTvBaseUrl + "/key/" + this.id + "?ts=" + Date.now());
}

function resetButtonBackgroundColor() {
    $("button").css("background-color", "#424242");
}
