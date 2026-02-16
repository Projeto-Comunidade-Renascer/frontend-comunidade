import { Link } from "react-router-dom";
import { useState } from 'react'; // 1. Importar o hook
import './header.css';
import { FaSearch, FaUserAlt } from 'react-icons/fa'; // Adicionei FaBars
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
        <Link className="link-logo" to={"/"}><div className="logo">Renascer Mulher</div></Link>

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
          <Link className="link-logo" to={"/comunidade"}><li>Comunidade</li></Link>
          <Link className="link-logo" to={"/tentantes"}>
            <li>Tentantes</li>
          </Link>
          <Link className="link-logo" to={"/gravidez"}>
            <li>Gravidez</li>
          </Link>
          <Link className="link-logo" to={"/maternidade"}>
            <li>Maternidade</li>
          </Link>
          <Link className="link-logo" to={"/bebes"}>
            <li>Bebês</li>
          </Link>
        </ul>
      </nav>

      <div className="hero">
        <h1 className="hero-text">Quando uma vida nasce, uma nova mulher desperta.</h1>
      </div>
    </header>
  );
};

export default Header;