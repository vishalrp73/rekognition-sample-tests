import AWS from 'aws-sdk';
import { secrets } from '../secritz';

export const AWSLogin = () => {

    console.log('AWS login attempted');

    return AWS.config.update({
        accessKeyId: secrets.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: secrets.REACT_APP_SECRET_ACCESS_KEY,
        region: 'ap-southeast-2'
    });

}