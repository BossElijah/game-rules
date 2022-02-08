import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Bang from './components/Bang';
import Dart from './components/Dart';
import Ludo from './components/Ludo';
import './styles/styles.scss';
import { Helmet } from 'react-helmet';
import Games from './components/Games';
import Matador from './components/Matador';

const App = () => (
  <>
    <Helmet>
      <title>Game Rules</title>
    </Helmet>
    <header>
      <div className="header__left">
        <Link to="/">
          <img src="/favicon.png" alt="" /> Game Rules
        </Link>
      </div>
      <div className="header__right">
        <div className="dropdown">
          <Link to="/" className="dropbtn">
            Games
          </Link>
          <div className="dropdown-content">
            <Link to="/dart">Dart</Link>
            <Link to="/bang">Bang</Link>
            <Link to="/ludo">Ludo</Link>
            <Link to="/matador">Matador</Link>
          </div>
        </div>
      </div>
    </header>

    <div className="content">
      <Routes>
        <Route exact path="/" element={<Games />} />
        <Route exact path="/bang" element={<Bang />} />
        <Route exact path="/dart" element={<Dart />} />
        <Route exact path="/ludo" element={<Ludo />} />
        <Route exact path="/matador" element={<Matador />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  </>
);

export default App;
