import { Link } from "react-router-dom";
import css from '../../assets/index.css';

function Contato() {
    return (
        <div className="Contato"> {/* Add the Contato class */}
            <h1>Bem-Vindo ao Contato</h1>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/produto">Produto</Link>
            <form> {/* Add a form element */}
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" />
                <br />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" />
                <br />
                <label for="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem"></textarea>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contato;