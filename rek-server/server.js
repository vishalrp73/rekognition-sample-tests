const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = 4000;
const app = express();
const AWS = require('aws-sdk');

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-southeast-2'
});

// Test connection to server
app.get('/', (req, res) => {
    console.log('established connection from client');
    res.status(200).send('successfully connected to server');
});

app.get('/test', (req, res) => {
    const mockData = 'no mock data provided';
    res.status(200).send(mockData)
});

app.post('/detectLabels', (req, res) => {

    console.log('detect labels endpoint triggered')
    
    const userUpload = req.body.queryImage;
    const imageBytes = new ArrayBuffer(userUpload.length);
    const ua = new Uint8Array(imageBytes);

    for (let i = 0; i < userUpload.length; i++) {
        ua[i] = userUpload.charCodeAt(i);
    }

     const params = {
         Image: {
             Bytes: imageBytes
         },
         MinConfidence: 0,
         ProjectVersionArn: process.env.AWS_MODELARN
     }

     const rekognition = new AWS.Rekognition();
     rekognition.detectCustomLabels(params, (err, data) => {
         if (err) console.log(err, err.stack);
         else res.status(201).send(data);
     });

});



app.listen(port, () => console.log('Express server running on port', port));