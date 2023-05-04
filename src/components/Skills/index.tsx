import { CardSkill } from "../CardSkill"
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { BsGit } from 'react-icons/bs'
import { SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiBootstrap } from 'react-icons/si'
import './style.css'

export const Skills = () => {
    return(
        <div className="skills">
            <CardSkill icon={AiFillHtml5} skill="HTML" nivel="avançado"/> 
            <CardSkill icon={IoLogoCss3} skill="CSS" nivel="avançado"/> 
            <CardSkill icon={SiJavascript} skill="Javascript" nivel="avançado"/> 
            <CardSkill icon={SiTypescript} skill="Typescript" nivel="intermediário"/> 
            <CardSkill icon={SiReact} skill="React" nivel="intermediário"/> 
            <CardSkill icon={SiNextdotjs} skill="Next.Js" nivel="intermediário"/> 
            <CardSkill icon={SiBootstrap} skill="Bootstrap" nivel="intermediário"/> 
            <CardSkill icon={BsGit} skill="GIT" nivel="intermediário"/> 
        </div>
    )
}