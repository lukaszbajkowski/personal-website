import React from 'react';

const TextDescComponent = ({desc, processElementsMap}) => (
    <div
        className={`text-col-desc`}
        data-radium="true"
        style={{width: processElementsMap && processElementsMap.size > 0 ? "" : "100%"}}
    >
        {desc && processElementsMap && processElementsMap.size > 0 && (
            <div>
                {Object.values(desc).map((element, index) => (
                    <p className={`desc-content`} key={index}>
                        {element}
                    </p>
                ))}
            </div>
        )}
    </div>
);

export default TextDescComponent;
