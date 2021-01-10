import './styles.css';
import { ReactComponent as Logo} from './Logo.svg'; // ReactComponent foi renomeado para Logo para simplificar no uso
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <nav className="main-navbar">
        <Logo />    
        <Link to="/" className="logo-text"> DS Delivery</Link>  
        </nav>
    )
}

//Dica
//"Link to" você será redirecionado para o caminho que estiver no "to" nesse exemplo ele manda para a página home
export default NavBar;