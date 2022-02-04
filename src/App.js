import { Routes, Route, Link } from 'react-router-dom';
import Bang from './components/Bang';
import Dart from './components/Dart';
import Ludo from './components/Ludo';
import './styles/styles.scss';

const App = () => (
  <>
    <header>
      <div className="header__left"><Link to="/">Game Rules</Link></div>
      <div className="header__right">
        <div className="dropdown">
          <div className="dropbtn">Games</div>
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
        <Route path="/" element={<h1>Home</h1>} />
        <Route exact path="/games">
          <Route exact path="bang" element={<Bang/>} />
          <Route exact path="dart" element={<Dart />} />
          <Route exact path="ludo" element={<Ludo />} />
        </Route>
      </Routes>
    </div>
  </>
);

export default App;
