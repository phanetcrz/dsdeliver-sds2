import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LikedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2° ed. do evento Semana DevSuperior    
            <div className = "footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new"> 
                    <YoutubeIcon />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <LikedinIcon />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig/" target="_new">
                    <InstagramIcon />
                </a>                
            </div>
        </footer>    
    )
}

// Dicas
//target="_new" =  abr uma noba aba no navegador

export default Footer;