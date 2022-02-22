import { AWSLogin } from './awsLogin';
import AWS from 'aws-sdk';
import { secrets } from '../secritz';

export const handleStart = () => {

    AWSLogin();
    const rekognition = new AWS.Rekognition();
    const params = {
        MinInferenceUnits: 1,
        ProjectVersionArn: secrets.REACT_APP_MODELARN
    }
    rekognition.startProjectVersion(params, (err, data) => {
        if (err) console.log(err, err.stack);
        else console.log('Starting Rekognition model');
    });

}

export const handleStop = () => {
    
    AWSLogin();
    const rekognition = new AWS.Rekognition();
    const params = {
        ProjectVersionArn: secrets.REACT_APP_MODELARN
    }
    rekognition.stopProjectVersion(params, (err, data) => {
        if (err) console.log(err, err.stack);
        else console.log('Stopping Rekognition model');
    });

}