import React from 'react';
//import './Projects.css';
import jhFace from './John-Face.png';

const Project = (props) => {
    return (
        <div>
            {/*<h3>#{props.projectNumber}</h3>*/}
            <h2>#{props.projectNumber} : {props.projectName}</h2>
        </div>
    )
}

export default Project;