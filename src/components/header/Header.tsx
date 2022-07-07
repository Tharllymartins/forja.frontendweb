import logo from "../../static/img/Logo.svg"
import "./index.css"

export function Header() {
    return (
        <header>
            <div className="header">
                <div className="">
                    <img className="logo" src={logo} alt="logo forja durable technology"/>
                </div>

                <nav className="nav">
                    <div className="nav-items">
                        <a href="#" className="nav-item">
                            Produtos
                        </a>

                        <a href="#" className="nav-item">
                            Contato
                        </a>

                        <a href="#" className="nav-item">
                            Sobre
                        </a>
                    </div>
                </nav>
            </div>


        </header>
    )
}