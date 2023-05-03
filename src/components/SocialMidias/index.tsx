import { AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import './style.css'
interface props{
    linkInsta: string,
    linkLinkedin: string,
    linkGithub: string
}
export const SocialMidia = ({linkGithub, linkInsta, linkLinkedin}: props) => {
    return(
        <div className="social-Midia">
            <ul>
                <li><a href={linkGithub} target='_blank'><FiGithub /></a></li>
                <li><a href={linkInsta} target='_blank'><AiOutlineInstagram /></a></li>
                <li><a href={linkLinkedin} target='_blank'><AiOutlineLinkedin /></a></li>
            </ul>
        </div>
    )
}