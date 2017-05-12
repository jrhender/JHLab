import React from 'react';
//import './Projects.css';
import Project from './Project.js'

const Projects = (props) => {
    return (
        <div>
            <p>See below for a list of recent projects:</p>
            <Project projectName="Jinder" projectNumber="1"/>
        </div>
    )
}

export default Projects;