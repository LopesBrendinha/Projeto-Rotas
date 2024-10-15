import { Link } from "react-router-dom";
import css from '../../assets/index.css';

function Sobre(){
    return(
        <div>
            <h1>Bem-Vindo à Sobre</h1>
            <Link to ="/">Home</Link>
            <Link to ="/contato">Contato</Link>
            <Link to ="/produto">Produto</Link>

        </div>
    );
}
export default Sobre;