import './styles.css';
import { ReactComponent as Logo} from './Logo.svg'; // ReactComponent foi renomeado para Logo para simplificar no uso

function NavBar(){
    return(
        <nav className="main-navbar">
        <Logo />    
        <a href="home" className="logo-text"> DS Delivery</a>  
        </nav>
    )
}

export default NavBar;