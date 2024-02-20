import { useState } from "react";

const ElementsList = ({ elements, setElements }) => {

    const [elementName, setElementName] = useState('');

    const addElement = (name) => {
        console.log('add');
        setElements([...elements, name]);
        setElementName ('')
    }

    const removeElement = (index) => {
        console.log('remove');
        let elements2 = []; 
        elements2.filter (elm => elm = elements2[index]);
        
        setElements(elements.filter (elm => elm != elements[index]));
    }

    const handleChangeNameElement = (event) => {
        console.log('change ');
        setElementName (event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit');
        addElement(elementName);
    }


    return (

        <div>
            <form method="post" onSubmit={handleSubmit}>
                <span>
                    <label>Name</label>
                    <input name="nametext" type='text' value={elementName} onChange={handleChangeNameElement} />
                    <button type='submit' >Add</button>
                </span>
            </form>
            <ul>
                {elements && elements.map((element, index) => {
                    return (
                        <li key={index}>
                            {element}
                            <button type="button" onClick={() => removeElement(index)}>Delete</button>
                        </li>
                    );
                })}

            </ul>
        </div>
    );
}

export default ElementsList;