import { useState } from 'react'
import { Projects } from '../Projects'
import { Skills } from '../Skills'
import './style.css'

export const ProjectsAndSkills = () => {
    const [ show, setShow ] = useState<string>("projects")

    const ClickProject = () => {
        if(show === "skills"){
            setShow("projects")
        }
    }
    const ClickSkill = () => {
        if(show === "projects"){
            setShow("skills")
        }
    }
    return(
        <>
            <div className="projects-skills">
                <button className='projeto' onClick={ClickProject}>Projetos</button>
                <button className='habilidades' onClick={ClickSkill}>Habilidades</button>
            </div>
            <div className='content'>
                {show === "projects" ? ( <Projects /> ) : (<Skills />)}
            </div>
        </>
    )
}