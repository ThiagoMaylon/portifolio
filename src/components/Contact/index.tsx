import { SiGmail } from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'
import './style.css'

export const Contact = () => {
    return(
        <div className="contact">
            <a href="#" className='download-Cv' target='_blank'>Download CV</a>

            <a href="mailto: tmaylon88@gmail.com" 
            className='linkContact' 
            target='_blank'>
                <SiGmail />
            </a>
            
            <a href="https://api.whatsapp.com/send/?phone=5573991446066&text&type=phone_number&app_absent=0" className='linkContact' target='_blank'><BsWhatsapp /></a>
        </div>
    )
}