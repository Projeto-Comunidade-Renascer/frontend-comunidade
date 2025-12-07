import React from 'react'
import './header.css'

function Header() {
  return (
    <header className="header-container">

      <h1>Renascer Mulher</h1>

      <div className='pesquisar-login-container'>
        <img src="src\imgs/pesquisar.png" alt="" />
        <input type='text' placeholder='Pesquisar...'></input>
        <img src="src\imgs/Vector.png" alt="" />
      </div>
      <nav className='nav-header'>
        <ul className="ul-container">
          <li className="lista-container">
            <a href="#">Comunidade</a>
            <a href="#">Tentantes</a>
            <a href="#">Gravidez</a>
            <a href="#">Maternidade</a>
            <a href="#">Bebês</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
