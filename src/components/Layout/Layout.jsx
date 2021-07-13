import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Menu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
