const textInput = document.getElementById('textInput');
const generateButton = document.getElementById('generateButton');
const qrImage = document.getElementById('qrImage');
const shareButton = document.getElementById('shareButton');

generateButton.addEventListener('click', () => {
    qrImage.src = "";
    const text = textInput.value;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=512x512`;
    qrImage.src = qrUrl;
});
  

shareButton.addEventListener('click', () => {
  const text = textInput.value;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=512x512`;
  navigator.clipboard.writeText(qrUrl);
  alert('QR code URL copied to clipboard');
});
