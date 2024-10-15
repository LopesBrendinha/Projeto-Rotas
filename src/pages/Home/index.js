import { Link } from "react-router-dom";
import css from '../../assets/index.css';

function Home(){
    return(
        <div>
            <h1>Bem-Vindo à Home</h1>
            <Link to ="/sobre">Sobre</Link>
            <Link to ="/contato">Contato</Link>
            <Link to ="/produto">Produto</Link>

        </div>
    );
}
export default Home;