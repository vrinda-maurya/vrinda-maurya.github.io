function generateQRCode() {
    let website = document.getElementById("website").value;
    if (website) {
        let qrcodeContainer = document.getElementById("qrcode");
        new qrcodeContainer.innerHTML = "";
        new QRcode(qrcodeContainer, website);
        document.getElementById("qrcode-conatiner").style.display = "block";
    } else {
        alert("Please enter a nalid URL")
    }
}

