import React from 'react';

const TextTitleComponent = ({title, hasDescription}) => (
    <div
        className={`text-col-title ${!hasDescription ? 'no_involvement_elements' : ''}`}
        data-radium="true"
        style={{width: hasDescription ? "" : "100%"}}
    >
        <h2 data-radium="true" className={`text-title`}>
            {title}
        </h2>
    </div>
);

export default TextTitleComponent;
