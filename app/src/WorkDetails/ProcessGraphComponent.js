import React from 'react';
import ProcessSection from './ProcessSection';

const ProcessGraphComponent = ({process}) => (
    <div className="process-graph" data-radium="true">
        <div className="process-container" data-radium="true">
            <h2 data-radium="true" className={`graph-title`}>
                Process
            </h2>
            <ProcessSection process={process}/>
        </div>
    </div>
);

export default ProcessGraphComponent;
