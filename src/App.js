import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Bang from './components/Bang';
import Dart from './components/Dart';
import Ludo from './components/Ludo';
import './styles/styles.scss';
import { Helmet } from 'react-helmet';
import Games from './components/Games';

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
          <Link to="/games" className="dropbtn">
            Games
          </Link>
          <div className="dropdown-content">
            <Link to="/games/dart">Dart</Link>
            <Link to="/games/bang">Bang</Link>
            <Link to="/games/ludo">Ludo</Link>
          </div>
        </div>
      </div>
    </header>

    <div className="content">
      <Routes>
        <Route exact path="games" element={<Games />} />
        <Route exact path="games/bang" element={<Bang />} />
        <Route exact path="games/dart" element={<Dart />} />
        <Route exact path="games/ludo" element={<Ludo />} />
        <Route path="*" element={<Navigate to="/games" />} />
      </Routes>
    </div>
  </>
);

export default App;
