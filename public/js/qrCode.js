function generateQRCode(){
    let ssid = document.getElementById('ssid').value;
    let password = document.getElementById('password').value;
    let encryption = document.getElementById('enc').value;
    let hidden = document.getElementById('hidden').checked;

    let qrcode = new QRCode("qrcode", {width: 100, height: 100});

    console.log('Enc: ' + encryption);
    let qrText = "WIFI:S:" + ssid + ";T:" + encryption + ";P:" + password + ";H:" + hidden + ";;";
    console.log(qrText);
    qrcode.makeCode(qrText);

}





