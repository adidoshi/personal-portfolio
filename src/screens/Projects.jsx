import React from 'react'
import { Helmet } from 'react-helmet'
import Card from '../components/card/Card'
import projects from '../data/projects.json'

const Projects = () => {
    return (
        <>
         <Helmet title="Projects | Aditya Doshi" />
        <div className="project-container">
            <h1>Projects</h1>
            <p>My journey from vanilla javascript to full MERN stack projects!</p>
            {projects.map((project) => (
           <Card key={project.id} project={project} />
            ))}
        </div>
        </>
    )
}

export default Projects
