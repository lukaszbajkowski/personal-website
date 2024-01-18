import React, {useMemo} from 'react';

const ProcessComponent = (props) => {
    const {process} = props;

    const numberOfPhases = useMemo(() => Object.keys(process).length, [process]);

    return (
        <>
            {Object.keys(process).map((key) => {
                const {title, elements} = process[key];
                const elementWidth = `calc(${100 / numberOfPhases}% - 10px)`;

                return (
                    <div
                        key={key}
                        className="graph-element"
                        style={{width: elementWidth}}
                    >
                        <span className="graph-icon"/>
                        <span className="graph-connector"/>
                        <h3 className="graph-element-title">
                            {title}
                        </h3>
                        <li className="graph-element-content">
                            {Object.values(elements).map((value, index) => (
                                <li
                                    key={index}
                                    className="graph-element-content"
                                >
                                    {value}
                                </li>
                            ))}
                        </li>
                    </div>
                );
            })}
        </>
    );
};

export default ProcessComponent;
