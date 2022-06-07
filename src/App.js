import './App.css';
import Home from './component/Home'
import { useState, useEffect } from 'react';
import { MyContext } from './context';


function App() {
  const [data, setData] = useState([])

  const fetchData = (() => {
    return (
      fetch('https://petstore.swagger.io/v2/swagger.json')
        .then((res) => { return res.json() })
        .then((response) => {
          setData(response)
        })
    )
  })
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <MyContext.Provider value={{data}}>
          <Home />
        </MyContext.Provider>
      </header>
    </div>
  );
}

export default App;
