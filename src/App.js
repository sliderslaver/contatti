import React from 'react' 
import Slideshow from './components/slideshow';
import Topnavbar from './components/topnavbar';
import Bottomnavbar from './components/bottomnavbar'
import Contattaci  from './contattaci';

function App() {
  return (
    <div className="App">
      <Topnavbar/>
      <Slideshow/>
      <Contattaci/>
      <Bottomnavbar/>
      </div>
  );
}

export default App;
