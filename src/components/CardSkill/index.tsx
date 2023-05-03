import { IconType } from 'react-icons'
import './style.css'

interface props{
    skill: string,
    nivel: string,
    icon: IconType,
}
export const CardSkill = ({skill, icon, nivel} : props) => {
    const Icon = icon
    return(
        <div className='CardSkill'>
                <Icon /> 
            <div className="skill-content">
                <p>{skill} </p>
                <span>{nivel}</span>
            </div>
        </div>
    )
}