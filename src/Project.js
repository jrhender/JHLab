import React from 'react';
import './Project.css';

const Project = (props) => {
    return (
        <div className="Project">
            <h2>#{props.projectNumber} : {props.projectName}</h2>
            <p>{props.projectDescription}</p>
        </div>
    )
}

export default Project;