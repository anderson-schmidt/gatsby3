import * as React from "react"
import { Link } from "gatsby"
import {container, navLinks, navLinkItem} from "./layout.module.css"

export default function Layout ({pageTitle, children}){
    return(
        <div className={container}>
            <hr />
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to = "/">Inicio</Link></li>
                    <li className={navLinkItem}><Link to = "/about">Sobre</Link></li>
                    <li className={navLinkItem}><Link to = "/fornecedores">Fornecedores</Link></li>
                </ul>
            </nav>
            <hr/>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
            <hr/>
                <p>Rodapé</p>
            <hr/>
        </div>
    )
}