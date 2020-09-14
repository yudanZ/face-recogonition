import React from 'react';
import './faceRecognition.css';
const FaceRecognition = ({imageUrl, box}) => {
    //console.log(imageUrl);
    if(!imageUrl){
        return (
            <div> </div>
        )
    }else {
        return (
            <div className='facerecognition_container'>
                <img id='inputImage' alt='' src={imageUrl}></img>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        );
    }
        
       
    
}
export default FaceRecognition;