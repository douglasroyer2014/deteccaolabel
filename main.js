const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient({
    keyFilename: 'C:\\Users\\iamdu\\OneDrive\\Documentos\\Projetos\\deteccaolabel\\key.json'
});

const fileName = 'C:\\Users\\iamdu\\Downloads\\invoice-template-us-neat-750px.png';

client.labelDetection(fileName)
    .then((result) => {
        const labels = result[0].labelAnnotations;
        console.log("Labels: ");
        labels.forEach(label => console.log(JSON.stringify(label)));
    })
    .catch((erro) => {
        console.log('Error: ', erro);
    });