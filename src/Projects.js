import React from 'react';
import './Projects.css';
import Project from './Project.js'

const Projects = (props) => {

    const projectDescriptions = {
        Jinder : "Jinder is a Tinder-like project! Built using React and ASP.NET Core MVC.",
        jhCodeLab : "This site! Built using React."
    }

    return (
        <div className="Projects">
            <p>See below for a list of recent projects:</p>
            <Project projectName="Jinder" projectNumber="1" projectDescription={projectDescriptions.Jinder}/>
            <Project projectName="JH Code Lab" projectNumber="2" projectDescription={projectDescriptions.jhCodeLab}/>
        </div>
    )
}

export default Projects;