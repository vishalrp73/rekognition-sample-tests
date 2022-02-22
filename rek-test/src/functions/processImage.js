import axios from 'axios';

export const ProcessImage = (e) => {

    console.log(e)
    console.log('process image function triggered');

    // Fetching user uploaded image
    let image = document.getElementById('output');
    image.src = URL.createObjectURL(e.target.files[0]);

    const control = document.getElementById('fileToUpload');
    const userFile = control.files[0];

    /* New FileReader class to convert user upload to base64
        for Rekognition to process */
    
    const reader = new FileReader();
    reader.onload = (() => {
        return (e) => {
            let img = document.createElement('img');
            let image = null;
            img.src = e.target.result;
            let jpg = true;

            try {
                image = atob(e.target.result.split('data:image/jpeg;base64,')[1]);
            } catch (e) {
                jpg = false;

                if (jpg === false) {
                    try {
                        image = atob(e.target.result.split('data:image/png;base64,')[1]);
                    } catch (e) {
                        console.log('Not an image file Rekognition can process');
                        return;
                    }
                }
            }

            const query = {
                queryImage: image
            }

            // For using mock data when model is off
            /* axios.get('http://localhost:4000/test')
            .then (response => {
                let conv = JSON.stringify(response.data);
                localStorage.setItem('rek_resp', conv);
                console.log('Logged a test response in localStorage')
            })
            .catch (err => console.log(err)); */


            // API detects labels from provided image (query object)
            axios.post('http://localhost:4000/detectLabels', query)
            .then ( (response) => {
                const rekoResp = response.data;
                console.log(rekoResp)
                let conv = JSON.stringify(rekoResp);
                console.log('added to localstorage')
                localStorage.setItem('rek_resp', conv);
            })
            .catch (err => console.log(err));

        }
    }) (userFile);
    reader.readAsDataURL(userFile);



}