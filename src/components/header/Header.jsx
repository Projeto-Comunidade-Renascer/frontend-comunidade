import './Header.css';
import { FaSearch, FaUserAlt } from 'react-icons/fa'; // Importa ícones de lupa e usuário da biblioteca React Icons.
import bannerImage from '../../assets/img/banner.png';


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
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Pesquise aqui" />
               
            </div>
            <FaUserAlt className="user-icon" />
            </div>
        </div>
      
      {/* Navbar superior: Contém logo, menu, busca e ícone de usuário. */}
      <nav className="navbar">
        
        {/* Menu de navegação: Lista de itens centrais. */}
        <div className="menu-container">
        <ul className="menu">
          <li>Comunidade</li>
          <li>Tentantes</li>
          <li>Gravidez</li>
          <li>Maternidade</li>
          <li>Bebês</li> 
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

export default Header;