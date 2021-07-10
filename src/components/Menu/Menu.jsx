import { FaHome, FaUserAlt, FaTools } from 'react-icons/fa';

const Menu = () => {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">
              <FaHome /> Principal
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <FaUserAlt /> Perfil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <FaTools /> Configuración
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
