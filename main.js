const vision = require('@google-cloud/vision');

async function setEndpoint() {
    const clientOptions = {
        apiEndpoint: 'eu-vision.googleapis.com',
        keyFilename: 'C:\\Users\\Eduardo Costa\\Documents\\GitHub\\deteccaolabel\\key.json'
    };

    const client = new vision.ImageAnnotatorClient(clientOptions);

    const [result] = await client.textDetection('C:\\Users\\Eduardo Costa\\Documents\\Paytrack\\Imagens\\Testes\\Cupons_para_teste_e_apresentacao\\2878ca5a-99ba-4a08-9711-7955575dc89c.jpg');
    const labels = result.textAnnotations;
    console.log('Text:');
    labels.forEach(label => console.log(label.description));
}

setEndpoint();