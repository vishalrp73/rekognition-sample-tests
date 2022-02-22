import './productDetect.css';

import { ProcessImage } from '../../functions/processImage';

const ProductDetect = () => {
    return (
        <div className = 'product-detect-wrapper'>

            <div className = 'input-container'>
                <input type = 'file' className = 'img_upload-wrapper'
                        accept = 'image/jpeg, image/png'
                        name = 'image' id = 'fileToUpload'
                        onChange = {(e) => ProcessImage(e)} />

                <img className = 'image-output' id = 'output' alt = '' />
            </div>



        </div>
    )
}

export default ProductDetect;