
import { Outlet, Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <div className="App">
      <h1>Home - React excercises</h1>
      <ul>
        <li>
          <Link to="/search-bar">Search Bar</Link>
        </li>
        <li>
          <Link to="/counter-button">Counter Buttons</Link>
        </li>
        <li>
          <Link to="/list">List of elements</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Home;
