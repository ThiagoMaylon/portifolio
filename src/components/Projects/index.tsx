import { CardProject } from "../CardProject"
import img from '../../assets/default-image.jpg'
import './style.css'

export const Projects = () => {
    return(
        <div className="Projects">
            <CardProject img={img} link="#" titulo="em desenvolvimento"/>
    
        </div>
    )
}