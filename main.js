const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient({
    keyFilename: 'C:\\Users\\douglas.royer\\Desktop\\furb\\sitemadistribuido\\deteccaolabel\\key.json'
});

const fileName = 'C:\\Users\\douglas.royer\\Desktop\\furb\\sitemadistribuido\\deteccaolabel\\cupomfiscal.png';

client.labelDetection(fileName)
.then((result) => {
    const labels = result[0].labelAnnotations;
    console.log("Labels: ");
    labels.forEach(label => console.log(label.description));
})
.catch((erro) => {
    console.log('Error: ', erro);
});