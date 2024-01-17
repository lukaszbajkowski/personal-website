import React from 'react';

const InvolvementSection = ({selectedWork, involvementElementsMap}) => {
    return (
        <>
            {((selectedWork.involvement_elements && selectedWork.involvement_elements.size > 0) || selectedWork.involvement) && (
                <div className="involvement-container" data-radium="true">
                    <h2 data-radium="true" className={`involvement-title`}>
                        Involvement
                    </h2>
                    {selectedWork.involvement && (
                        <p data-radium="true"
                           className={`involvement-desc ${!selectedWork.involvement_elements ? ' no_involvement_elements' : ''}`}>
                            {selectedWork.involvement}
                        </p>
                    )}
                    {involvementElementsMap && involvementElementsMap.size > 0 && (
                        <ul data-radium="true" className={`involvement-table`}>
                            {Array.from(involvementElementsMap).map(([key, value], index) => (
                                <li key={index} className="involvement-item" data-radium="true">
                                    {value}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </>
    );
};

export default InvolvementSection;
