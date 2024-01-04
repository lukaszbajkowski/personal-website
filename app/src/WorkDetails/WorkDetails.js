import React from 'react';
import {useParams} from 'react-router-dom';

const WorkDetails = () => {
    const {id} = useParams();

    // Pobierz dane dla konkretnego projektu z workData

    return (
        <div>
            <h2>Details for Work {id}</h2>
            {/* Wyświetl szczegóły projektu */}
        </div>
    );
};

export default WorkDetails;
