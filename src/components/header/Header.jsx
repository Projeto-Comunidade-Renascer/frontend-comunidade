import { useState } from 'react'; // 1. Importar o hook
import './header.css';
import { FaSearch, FaUserAlt, FaBars } from 'react-icons/fa'; // Adicionei FaBars
import { BsFillPersonLinesFill } from "react-icons/bs";
import MenuMobile from '../menu-mobile/MenuMobile'; // Importar o componente novo
import bannerImage from '../../assets/img/banner.png';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false); // 2. Estado do menu

  return (
    <header className="header">
      {/* 3. Chamar o Menu Mobile passando o estado e a função de fechar */}
      <MenuMobile isOpen={menuAberto} onClose={() => setMenuAberto(false)} />

      <img src={bannerImage} alt="Banner" className='banner-img' />

      <div className='topper'>
          <div className="logo">Renascer Mulher</div>
          
          <div className="search-logo">
            <div className="search-bar desktop-only"> {/* Classe para sumir no mobile */}
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Pesquise aqui" />
            </div>
            <FaUserAlt className="user-icon desktop-only" />
            
            {/* 4. Ícone Hambúrguer: Só aparece no mobile via CSS */}
            <BsFillPersonLinesFill className="menu-icon-mobile" onClick={() => setMenuAberto(true)} />
          </div>
      </div>

      <nav className="navbar desktop-only"> {/* Esconde a lista original no mobile */}
        <ul className="menu">
          <li>Comunidade</li>
          <li>Tentantes</li>
          <li>Gravidez</li>
          <li>Maternidade</li>
          <li>Bebês</li> 
        </ul>
      </nav>

      <div className="hero">
        <h1 className="hero-text">Quando uma vida nasce, uma nova mulher desperta.</h1>
      </div>
    </header>
  );
};

export default Header;