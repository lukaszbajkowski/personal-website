import React from 'react';
import '../WorkDetails.scss'

const ImageRowComponent = ({img, alt}) => (
    <div className="image-row" data-radium="true">
        <div>
            <div className={`image-position`} data-radium="true">
                <img src={img} alt={alt} className={`image`} data-radium="true"/>
            </div>
        </div>
    </div>
);

export default ImageRowComponent;
