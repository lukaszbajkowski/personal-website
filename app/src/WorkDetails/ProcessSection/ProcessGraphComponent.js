import React from 'react';
import '../WorkDetails.scss'
import ProcessComponent from "./ProcessComponent";

const ProcessGraphComponent = ({process}) => (
    <div className="process-graph" data-radium="true">
        <div className="process-container" data-radium="true">
            <h2 data-radium="true" className={`graph-title`}>
                Process
            </h2>
            <ProcessComponent process={process}/>
        </div>
    </div>
);

export default ProcessGraphComponent;
