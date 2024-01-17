import React from 'react';
import BackgroundText from "./BackgroundText";
import './WorkDetails.scss'

const BackgroundContainer = ({selectedWork}) => {
    return (
        <div className="container-background container">
            <BackgroundText selectedWork={selectedWork}/>
        </div>
    );
};

export default BackgroundContainer;