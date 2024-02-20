
import { useState, useEffect } from 'react';
import ElementsList from '../../components/elements-list/elements.list.component';


const ListRoute = () => {

  const [elements, setElements] = useState (['a','b']);
  
  useEffect ( () => {
    console.log ("effect in route");
  }, [elements]);

  return (
    <div className="App">
      <h1>List of elements</h1>
      <ElementsList elements={elements} setElements={setElements}/>
    </div>
  );
}

export default ListRoute;
