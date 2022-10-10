
const vision = require('@google-cloud/vision').v1;

const client = new vision.ImageAnnotatorClient({
    keyFilename: 'C:\\Users\\iamdu\\OneDrive\\Documentos\\Projetos\\deteccaolabel\\key.json'
});

/*
const bucketName = 'my-bucket';
const fileName = 'path/to/document.pdf';
const outputPrefix = 'results'
*/

const gcsSourceUri = `C:\\Users\\iamdu\\Downloads\\invoice-template-us-neat-750px.pdf`;
const gcsDestinationUri = `C:\\Users\\iamdu\\Downloads\\`;

const inputConfig = {
    mimeType: 'application/pdf',
    gcsSource: {
        uri: gcsSourceUri,
    },
};
const outputConfig = {
    gcsDestination: {
        uri: gcsDestinationUri,
    },
};
const features = [{ type: 'DOCUMENT_TEXT_DETECTION' }];
const request = {
    requests: [
        {
            inputConfig: inputConfig,
            features: features,
            outputConfig: outputConfig,
        },
    ],
};

const [operation] = await client.asyncBatchAnnotateFiles(request);
const [filesResponse] = await operation.promise();
const destinationUri =
    filesResponse.responses[0].outputConfig.gcsDestination.uri;
console.log('Json saved to: ' + destinationUri);