import { Link } from "react-router-dom";
import LOQ from "../../assets/imgs/note.jfif";
import css from '../../assets/index.css';

function Produto() {
    return (
        <div className="Produto"> {/* Adicionando a classe Produto */}
            <h1>Bem-Vindo à Produto</h1>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
            <img src={LOQ} alt="Um notebook" className="produto-img"/> {/* Adicionando uma classe para a imagem */}
        </div>
    );
}

export default Produto;