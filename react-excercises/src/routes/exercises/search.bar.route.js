
import { useState, useEffect } from 'react';
import SearchBar from '../../components/search-bar/search-bar.component';

const SearchBarRoute = () => {

  const [elements, setElements] = useState ([]);
  const [foundElements, setFoundElements] = useState ([]);
  

  useEffect ( () => {
    console.log ("loading elements");
    const elementList = ['Quito', 'Guayaquil', 'New York', 'Paris'];
    setElements (elementList);
    setFoundElements (elementList);
  }, []);

  return (
    <div className="App">
      <SearchBar elements={elements} setElements={setElements} foundElements={foundElements} setFoundElements={setFoundElements} />
    </div>
  );
}

export default SearchBarRoute;
