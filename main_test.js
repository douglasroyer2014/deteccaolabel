const vision = require('@google-cloud/vision');

async function setEndpoint() {
    const clientOptions = {
        apiEndpoint: 'eu-vision.googleapis.com',
        keyFilename: 'C:\\Users\\iamdu\\OneDrive\\Documentos\\Projetos\\deteccaolabel\\key.json'
    };

    const client = new vision.ImageAnnotatorClient(clientOptions);

    const [result] = await client.textDetection('C:\\Users\\iamdu\\Downloads\\cupom-fiscal.jpg');
    const labels = result.textAnnotations;
    console.log('Text:');
    labels.forEach(label => console.log(label.description));
}
setEndpoint();