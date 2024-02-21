
import './App.css';
import Home from './routes/home/home.route';
import { Route, Routes } from 'react-router-dom';
import SearchBarRoute from './routes/exercises/search.bar.route';
import CounterButtonRoute from './routes/exercises/counter.button.route';
import ListRoute from './routes/exercises/list.of.elements.route';
import CountdownRoute from './routes/exercises/countdown.route';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} >
        <Route path='search-bar' element={<SearchBarRoute />} ></Route> 
        <Route path='counter-button' element={<CounterButtonRoute />} ></Route> 
        <Route path='list' element={<ListRoute />} ></Route>
        <Route path='countdown' element={<CountdownRoute />} ></Route> 
      </Route> 
    </Routes>
  );
}

export default App;
