import { CardSkill } from "../CardSkill"
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import './style.css'

export const Skills = () => {
    return(
        <div className="skills">
            <CardSkill icon={AiFillHtml5} skill="HTML" nivel="avançado"/> 
            <CardSkill icon={IoLogoCss3} skill="CSS" nivel="avançado"/> 
            <CardSkill icon={SiJavascript} skill="Javascript" nivel="avançado"/> 
            <CardSkill icon={SiTypescript} skill="Typescript" nivel="intermediário"/> 
            <CardSkill icon={AiFillHtml5} skill="React" nivel="intermediário"/> 
            <CardSkill icon={AiFillHtml5} skill="Next.Js" nivel="intermediário"/> 
            <CardSkill icon={AiFillHtml5} skill="Bootstrap" nivel="intermediário"/> 
            <CardSkill icon={AiFillHtml5} skill="GIT" nivel="intermediário"/> 
        </div>
    )
}