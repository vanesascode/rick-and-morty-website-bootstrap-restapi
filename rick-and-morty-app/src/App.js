import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Characters from './components/Characters'
import Pagination from './components/Pagination'



function App() {

  const [characters, setcharacters] = useState([])
  const [info, setinfo] = useState({})

  const initialUrl = 'https://rickandmortyapi.com/api/character'

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setcharacters(data.results);
        setinfo(data.info);
      })
      .catch(error => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacters(info.next);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }


  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])



  return (
    <>

      <Navbar brand='Characters' />
      <div className='container mt-4'>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>

    </>

  );
}

export default App;
