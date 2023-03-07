const SearchBar = ({elements, setElements, foundElements, setFoundElements}) => {

    const searchElements = (event) => {
        const filteredElements = elements.filter (element => element.includes (event.target.value) );
        setFoundElements (filteredElements);
    }

    return (
        <div>
            <span>Search</span>
            <input type={'text'} onChange={searchElements}/>    
            <div className={'search-bar-element-list'}>
                <ul>
                    {foundElements && foundElements.map ((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
        </div>
    ); 
}

export default SearchBar;