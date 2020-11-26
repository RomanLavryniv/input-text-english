document.querySelector('#letters').onkeypress = function (e) {
    console.log(e.keyCode);
    if (e.keyCode < 65 || e.keyCode > 122) {
        console.log('цифри заборонені для введення');
        console.log('English only');
    } else {
        this.value += e.key;
    }
    return false;
}