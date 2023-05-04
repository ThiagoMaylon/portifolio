import { BsLink } from 'react-icons/bs'
import './style.css'

interface props {
    img: string,
    titulo: string,
    link: string

}

export const CardProject = ({img, titulo, link}: props) => {
    return(
        <div className="card">
            <img src={img} alt={`imagem ilustrativa do projeto ${titulo}`} className="image"/>
            
            <div className="cardProject-content">
                <p>{titulo}</p>
                <p><a href={link}><BsLink /></a></p>
            </div>
        </div>
    )
}