import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Characters from './components/Characters'
import Pagination from './components/Pagination'



function App() {

  const [characters, setcharacters] = useState([])

  const initialUrl = 'https://rickandmortyapi.com/api/character'

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setcharacters(data.results))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])



  return (
    <>

      <Navbar brand='Rick and Morty App' />
      <div className='container mt-5'>
        <Pagination />
        <Characters characters={characters} />
        <Pagination />
      </div>

    </>

  );
}

export default App;
