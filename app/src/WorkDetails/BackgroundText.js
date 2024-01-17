import React from 'react';
import './WorkDetails.scss'

const BackgroundText = ({selectedWork}) => {
    return (
        <div className="background-text">
            <div className="text-position">
                <h1 className="text-size">
                    {selectedWork.title}
                </h1>
            </div>
        </div>
    );
};

export default BackgroundText;