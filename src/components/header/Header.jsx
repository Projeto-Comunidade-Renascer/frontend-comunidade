import React from 'react'; // Importa a biblioteca React para criar componentes.
import './Header.css'; // Importa o arquivo de estilos CSS associado.
import { FaSearch, FaUserAlt } from 'react-icons/fa'; // Importa ícones de lupa e usuário da biblioteca React Icons.
import bannerImage from '../../assets/img/banner.png'; // Importa a imagem do banner.

// Componente funcional Header: Representa o banner superior da página principal.
const Header = () => {
  return (
    // Elemento principal do header, com classe para estilização geral.
    <header className="header">

    <img src={bannerImage} alt="Banner" className='banner-img' />

    <div className='topper'>
      {/* Logo do site: Texto estilizado como no Figma. */}
          <div className="logo">
            Renascer Mulher
          </div>
        
        <div className="search-logo">
          <div className="search-bar">
              <FaSearch className="search-icon" /> {/* Ícone de lupa para busca. */}
              <input type="text" placeholder="Pesquise aqui" /> {/* Campo de input para pesquisa. */}
               {/* Ícone de usuário: Representa perfil ou login. */}
               
            </div>
            <FaUserAlt className="user-icon" />
            </div>
        </div>
      
      {/* Navbar superior: Contém logo, menu, busca e ícone de usuário. */}
      <nav className="navbar">
        
        {/* Menu de navegação: Lista de itens centrais. */}
        <div className="menu-container">
        <ul className="menu">
          <li>Comunidade</li> {/* Item de menu: Link para seção de comunidade. */}
          <li>Tentantes</li> {/* Item para tentantes (mulheres tentando engravidar). */}
          <li>Gravidez</li> {/* Item para gravidez. */}
          <li>Maternidade</li> {/* Item para maternidade. */}
          <li>Bebês</li> {/* Item para bebês. */}
        </ul>
        </div>
        
      </nav>
      
      {/* Seção hero: Imagem de fundo com texto overlay. */}
      <div className="hero">
        {/* Texto principal do banner, centralizado sobre a imagem. */}
        <h1 className="hero-text">Quando uma vida nasce, uma nova mulher desperta.</h1>
      </div>
      
    </header>
  );
};

export default Header; // Exporta o componente para uso em outras partes da app (ex: App.jsx).