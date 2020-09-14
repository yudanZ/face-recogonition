import React from 'react';
import './imageLinkForm.css';


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div className="image_container">
            <h1>{'Detect faces from your pictures.'}</h1>
            <form className="form">
                <input type='text' placeholder="please put image url here" onChange={onInputChange}></input>
                <button  type="submit" onClick={onButtonSubmit}>Detect</button>
            </form>
        </div>
    );
}

export default ImageLinkForm;