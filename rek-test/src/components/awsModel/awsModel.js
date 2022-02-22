import './awsModel.css';
import { handleStart, handleStop } from '../../functions/startStop';

const AWSModel = () => {

    const dummy = () => {
        console.log('Dummy Start button clicked, swap input onClick function from dummy() to handleStart() in awsModel.js line 19');
    }

    return (
        <div className = 'aws_model-wrapper'>
            <h5 className = 'model-desc'>REKOGNITION MODEL</h5>
            <p className = 'model-subtitle'>Start and Stop the AWS Rekognition model, please click 'STOP' after using</p>

            <div className = 'start-stop-wrap'>
                <input type = 'button'
                        value = 'START' id = 'start-btn'
                        className = 'model-btn'
                        onClick = { () => handleStart() } />

                <input type = 'button'
                        value = 'STOP' id = 'stop-btn'
                        className = 'model-btn'
                        onClick = { () => handleStop() } />

            </div>
        </div>
    )



}

export default AWSModel;