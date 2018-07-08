import React from 'react';
import './Label.css'

const Label = ({name}) => {
    return (
        <div className="Label">
             {name}
        </div>
    );
};

export default Label;