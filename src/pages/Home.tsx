import { Photo } from "../components/Photo";
import img from '../assets/my-photo.jpeg'
import { SocialMidia } from "../components/SocialMidias";
import { Contact } from "../components/Contact";
import "./App.css";
import { ProjectsAndSkills } from "../components/ProjectsAndSkills";

export const App = () => {
  const linkGithub = 'https://github.com/ThiagoMaylon'
  const linkInsta = 'https://www.instagram.com/thiagox_dev/'
  const linkLinkedin = 'https://www.linkedin.com/in/ThiagoMaylon/'
  return (
   <main>
    <Photo img={img}/>

    <p className="name">Thiago Maylon P. Reis</p>
    <p className='office'><span>Desenvolvedor</span> Front-End </p>

    <SocialMidia
      linkGithub={linkGithub} 
      linkInsta={linkInsta} 
      linkLinkedin={linkLinkedin}
    />
    <Contact />
    <ProjectsAndSkills />
   </main>
  );
}


