import '../../components/Layout/Layout.css';
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Menu/Menu';

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Menu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Perfil</h1>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Profile;
