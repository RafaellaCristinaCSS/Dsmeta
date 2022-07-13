import logo from '../../Assets/img/logo.svg'
import './style.css'
function Header(){
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSmeta" />
                <h1>DSmeta</h1>
                <p>Desenvolvido por:
                    <a href="https://www.instagram.com/rafasousa_css/">@rafasousa_css</a>
                </p>
            </div>
        </header>
    )
}
export default Header