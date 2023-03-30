// JavaScript monkey-patching needed for Safari/iOS
String.prototype.startsWith = function (prefix) {
    return this.indexOf(prefix) === 0;
}

function init() {
    $("button").click(buttonClick);
}

function buttonClick() {
    $.get("remote/send-key.php?key=" + this.id);
}
