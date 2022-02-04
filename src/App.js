import { Routes, Route, Link } from 'react-router-dom';
import Bang from './components/Bang';
import './styles/styles.scss';

const App = () => (
  <>
    <header>
      <div className="header__left">Home img (logo)</div>
      <div className="header__right">
        <div class="dropdown">
          <div class="dropbtn">Games</div>
          <div class="dropdown-content">
            <Link to="/games/dart">Dart</Link>
            <Link to="/games/bang">Bang</Link>
          </div>
        </div>
      </div>
    </header>

    <div className="content">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route exact path="/games">
          <Route exact path="bang" element={<Bang/>} />
          <Route exact path="dart" element={<h1>Dart</h1>} />
        </Route>
      </Routes>
    </div>
  </>
);

export default App;
