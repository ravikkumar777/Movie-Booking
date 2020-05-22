let status = $('#status');
let body = $('body');

window.addEventListener('load', function () {
    if (!navigator.onLine) {
        status.text("You're are Offline, Check Internet Connection..");
        status.addClass('error');
    }
}, false);

window.addEventListener('online', function () {
    status.text('');
    status.removeClass('error');
    body.removeClass('pg-container');
}, false);

window.addEventListener('offline', function () {
    status.text("You're are Offline, Check Internet Connection..");
    status.addClass('error');
    body.addClass('pg-container');
}, false);


