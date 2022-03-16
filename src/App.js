import Landingpage from '../src/Pages/Landingpage/Landingpage'
import{Route,Routes } from 'react-router-dom'

function App() {
  return (
   
    <div className="App">
       <Routes>
    <Route exact path="/" element={<Landingpage/>}/>

       </Routes>
      
    </div>
  );
}

export default App;
