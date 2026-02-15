import { FaSearch, FaUserAlt, FaTimes } from 'react-icons/fa';
import './menu-mobile.css';


const MenuMobile = ({ isOpen, onClose }) => {
  return (
    // Se isOpen for true, adicionamos a classe 'active'
    <div className={`menu-mobile-overlay ${isOpen ? 'active' : ''}`}>
      <div className="menu-mobile-content">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="mobile-user-section">
            <FaUserAlt className="user-icon-mobile" />
            <div className="search-bar-mobile">
                <FaSearch className="search-icon-mobile" />
                <input type="text" placeholder="Pesquise aqui" />
            </div>
        </div>

        <nav className="mobile-nav">
          <ul>
            <li onClick={onClose}>Comunidade</li>
            <li onClick={onClose}>Tentantes</li>
            <li onClick={onClose}>Gravidez</li>
            <li onClick={onClose}>Maternidade</li>
            <li onClick={onClose}>Bebês</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuMobile;